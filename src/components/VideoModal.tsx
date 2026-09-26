import { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Circle,
  Link as LinkIcon,
} from 'lucide-react';
import { resolveLessonDriveUrls } from '@/lib/driveUrls';

interface VideoModalProps {
  isOpen: boolean;
  lessonId: string;
  lessonTitle: string;
  specialty: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onClose: () => void;
  directDriveId?: string;
  customDriveUrls?: Record<string, string>;
  onSaveCustomDriveUrl?: (lessonId: string, url: string) => void;
}

export function VideoModal({
  isOpen,
  lessonId,
  lessonTitle,
  specialty,
  isCompleted,
  onToggleComplete,
  onClose,
  directDriveId,
  customDriveUrls,
  onSaveCustomDriveUrl,
}: VideoModalProps) {
  const [showEditUrl, setShowEditUrl] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  const { embedUrl, externalUrl, isCustom } = resolveLessonDriveUrls(
    lessonId,
    customDriveUrls,
    directDriveId,
  );

  useEffect(() => {
    if (customDriveUrls?.[lessonId]) {
      setInputUrl(customDriveUrls[lessonId]);
    } else {
      setInputUrl('');
    }
    setShowEditUrl(false);
  }, [lessonId, customDriveUrls]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveCustomDriveUrl) {
      onSaveCustomDriveUrl(lessonId, inputUrl.trim());
      setShowEditUrl(false);
    }
  };

  const handleClearUrl = () => {
    if (onSaveCustomDriveUrl) {
      onSaveCustomDriveUrl(lessonId, '');
      setInputUrl('');
      setShowEditUrl(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in safe-top safe-bottom">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      <div className="w-full max-w-5xl max-h-[95vh] bg-ink-900 border border-ink-875 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-up">
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-ink-875 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-ink-925">
          {/* Nome da aula e especialidade */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-600/15 border border-red-600/30 px-2 py-0.5 rounded-md">
                {specialty}
              </span>
              <span className="text-zinc-600 text-xs">•</span>
              <span className="text-xs text-zinc-400 font-medium">
                Player Embutido Google Drive
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white truncate leading-tight">
              {lessonTitle}
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Botão de Marcar como Assistida */}
            <button
              type="button"
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                  : 'bg-ink-850 text-zinc-300 hover:text-white border border-ink-800 hover:border-zinc-700'
              }`}
              title={isCompleted ? 'Desmarcar aula' : 'Marcar como assistida'}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Assistida</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Marcar como Assistida</span>
                </>
              )}
            </button>

            {/* Link alternativo discreto: Abrir no Google Drive externo */}
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-ink-850 border border-ink-800 hover:border-zinc-700 transition-colors"
              title="Abrir este vídeo em uma nova aba do Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden md:inline">Abrir no Google Drive externo</span>
              <span className="md:hidden">Abrir fora</span>
            </a>

            {/* Botão de fechar (X) */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-ink-850 transition-colors"
              aria-label="Fechar player"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="flex-1 bg-black min-h-[300px] sm:min-h-[460px] max-h-[70vh] flex items-center justify-center relative overflow-hidden">
          <iframe
            key={embedUrl}
            src={embedUrl}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            title={lessonTitle}
          />
        </div>

        {/* Modal Footer: Discreet Drive Link Manager */}
        <div className="px-4 sm:px-6 py-2.5 border-t border-ink-875 bg-ink-925 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3 text-zinc-400">
            <span className="text-zinc-500">
              Modo Embed: <code className="text-zinc-400 font-mono text-[11px]">/preview</code>
            </span>
            {isCustom && (
              <span className="text-emerald-400 font-medium text-[11px] bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                Link Personalizado Ativo
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!showEditUrl ? (
              <button
                type="button"
                onClick={() => setShowEditUrl(true)}
                className="text-zinc-400 hover:text-white flex items-center gap-1.5 text-xs transition-colors"
              >
                <LinkIcon className="w-3 h-3 text-zinc-500" />
                <span>{isCustom ? 'Alterar Link do Drive' : 'Inserir Link do Drive'}</span>
              </button>
            ) : (
              <form onSubmit={handleSaveUrl} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                  className="px-2.5 py-1 text-xs rounded-lg bg-ink-950 border border-ink-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 w-64 sm:w-80"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-xs transition-colors"
                >
                  Salvar
                </button>
                {isCustom && (
                  <button
                    type="button"
                    onClick={handleClearUrl}
                    className="px-2 py-1 rounded-lg bg-ink-850 hover:bg-ink-800 text-zinc-400 hover:text-white text-xs transition-colors"
                  >
                    Restaurar
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowEditUrl(false)}
                  className="px-2 py-1 text-zinc-500 hover:text-zinc-300 text-xs"
                >
                  Cancelar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

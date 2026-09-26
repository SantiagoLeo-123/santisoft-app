import { useState } from 'react';
import { Download, Share, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '@/hooks/usePWAInstall';

export function PWAInstallButton() {
  const { canInstall, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled || !canInstall) {
    return null;
  }

  const handleClick = () => {
    if (isIOS) {
      setShowIOSGuide(true);
    } else {
      install();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-1.5 w-10 h-10 sm:w-auto sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold bg-red-600/20 text-red-300 border border-red-500/40 hover:bg-red-600/30 hover:text-white active:scale-95 transition-all shadow-sm shrink-0"
        title="Instalar SantiSOFT como aplicativo"
      >
        <Download className="w-4 h-4 text-red-400" />
        <span className="hidden sm:inline">Instalar App</span>
      </button>

      {/* iOS Safari Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-ink-900 border border-ink-850 p-6 shadow-2xl space-y-4 animate-scale-up">
            <div className="flex items-center justify-between pb-2 border-b border-ink-850">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-red-500" />
                <span>Instalar no iOS (iPhone / iPad)</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Para instalar o <strong>SantiSOFT</strong> em tela cheia no seu iPhone ou iPad:
            </p>

            <div className="space-y-3 text-xs bg-ink-950 p-3.5 rounded-xl border border-ink-850 text-zinc-300">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-blue-600/20 text-blue-400 shrink-0 mt-0.5">
                  <Share className="w-3.5 h-3.5" />
                </div>
                <span>1. Toque no botão <strong>Compartilhar</strong> na barra do Safari.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-red-600/20 text-red-400 shrink-0 mt-0.5">
                  <PlusSquare className="w-3.5 h-3.5" />
                </div>
                <span>2. Role para baixo e selecione <strong>Adicionar à Tela de Início</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-emerald-600/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>3. Toque em <strong>Adicionar</strong> no canto superior direito.</span>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 shadow-md"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

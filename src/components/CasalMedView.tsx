import { ExternalLink, FileText } from 'lucide-react';

const PREVIEW_URL = 'https://drive.google.com/file/d/1me5d3No_NE2x3zJk2jRex8xmEkithkF7/preview';
const SHARE_URL = 'https://drive.google.com/file/d/1me5d3No_NE2x3zJk2jRex8xmEkithkF7/view?usp=sharing';

export function CasalMedView() {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 overflow-y-auto scrollbar-thin">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/20">
              <FileText className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">
                CASALMED — Resumos 2026
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">
                Visualização do documento diretamente no navegador
              </p>
            </div>
          </div>

          <a
            href={SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-ink-850 text-zinc-300 hover:text-white hover:bg-ink-825 border border-ink-800 transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Abrir em Nova Aba</span>
          </a>
        </div>

        {/* Iframe Container */}
        <div className="w-full h-[76vh] md:h-[86vh] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
          <iframe
            src={PREVIEW_URL}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="CASALMED — Resumos 2026"
          />
        </div>
      </div>
    </div>
  );
}

export function SantiSoftLogo({ size = 36, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Stylized Medical ECG + 'S' Monogram SVG Logo */}
      <div
        className="relative shrink-0 rounded-xl overflow-hidden shadow-md shadow-red-600/25 border border-red-500/20"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 512 512"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="santiRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4155" />
              <stop offset="100%" stopColor="#b5051e" />
            </linearGradient>
            <radialGradient id="santiGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff173d" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#09090d" stopOpacity="0" />
            </radialGradient>
            <filter id="santiShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#ff002b" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background Squircle */}
          <rect width="512" height="512" rx="115" fill="#0f0f15" />
          <circle cx="256" cy="256" r="220" fill="url(#santiGlow)" />

          {/* Intertwined Stylized 'S' & Medical Pulse */}
          <g filter="url(#santiShadow)">
            {/* Curva estilizada do S */}
            <path
              d="M 335 160 C 335 115, 292 95, 256 95 C 200 95, 172 125, 172 165 C 172 225, 340 220, 340 322 C 340 390, 288 417, 256 417 C 196 417, 168 380, 168 335"
              fill="none"
              stroke="url(#santiRedGrad)"
              strokeWidth="50"
              strokeLinecap="round"
            />

            {/* Linha de Pulso / Eletrocardiograma ECG */}
            <path
              d="M 75 258 L 175 258 L 196 226 L 218 288 L 248 172 L 278 338 L 302 242 L 322 268 L 338 258 L 437 258"
              fill="none"
              stroke="#ffffff"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight leading-none text-base sm:text-lg">
            <span className="font-extrabold text-white">Santi</span>
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              SOFT
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 font-medium tracking-wide leading-none mt-1 hidden xs:inline sm:inline">
            Plataforma Médica
          </span>
        </div>
      )}
    </div>
  );
}

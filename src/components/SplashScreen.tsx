import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 1600);
    const doneTimer = setTimeout(onFinish, 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black ${
        fadingOut ? 'animate-splash-fade-out' : ''
      }`}
    >
      {/* Red glow orb behind text */}
      <div
        className="absolute w-64 h-64 rounded-full bg-red-600/20 blur-3xl animate-splash-scale"
        style={{ animationDelay: '0.1s' }}
      />

      {/* Icon */}
      <div
        className="relative mb-6 animate-splash-scale"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600 text-white shadow-2xl shadow-red-600/30">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M12 6c-3 0-5-1-5-1M12 6c3 0 5-1 5-1M12 12c-4 0-6-2-6-2M12 12c4 0 6-2 6-2M12 18c-3 0-5-1-5-1M12 18c3 0 5-1 5-1" />
          </svg>
        </div>
      </div>

      {/* SantiSOFT text */}
      <h1
        className="relative text-4xl sm:text-5xl font-extrabold tracking-tight animate-splash-fade-in animate-splash-glow"
        style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
      >
        <span className="text-white">Santi</span>
        <span className="text-red-600">SOFT</span>
      </h1>

      {/* Tagline */}
      <p
        className="relative mt-3 text-xs sm:text-sm text-zinc-600 font-medium tracking-[0.3em] uppercase animate-splash-fade-in"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        Videoaulas Médicas
      </p>
    </div>
  );
}

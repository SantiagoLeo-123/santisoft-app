import { Menu, Activity, Home, User, Calendar, Shield, LogOut, BookOpen, Cloud, Loader2 } from 'lucide-react';
import type { SubjectArea, Lesson, UserProfile, AuthUser } from '@/types';
import { getAvatarSrc, getPresetColor } from '@/lib/avatars';

const BANCO_QUESTOES_URL = 'https://drive.google.com/drive/folders/1lPgsWzctV6GUMvwTp-yzcjbfr_DOEBc8?usp=drive_link';

interface HeaderProps {
  areaName: string | null;
  lesson: Lesson | null;
  area: SubjectArea | null;
  completedCount: number;
  totalCount: number;
  onToggleSidebar: () => void;
  onBackToHome: () => void;
  onSwitchProfile: () => void;
  profile: UserProfile | null;
  isCronograma: boolean;
  isAdmin: boolean;
  onOpenAdmin: () => void;
  onLogout: () => void;
  user?: AuthUser | null;
  onOpenAuthModal?: () => void;
  isSyncing?: boolean;
}

export function Header({
  areaName,
  lesson,
  area,
  completedCount,
  totalCount,
  onToggleSidebar,
  onBackToHome,
  onSwitchProfile,
  profile,
  isCronograma,
  isAdmin,
  onOpenAdmin,
  onLogout,
  user,
  onOpenAuthModal,
  isSyncing,
}: HeaderProps) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const avatar = profile ? getAvatarSrc(profile.avatar) : null;
  const avatarColor = avatar && avatar.type === 'preset' ? getPresetColor(avatar.value) : '#dc2626';

  return (
    <header className="bg-ink-900/80 backdrop-blur-md border-b border-ink-875 px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-4 shrink-0 safe-top">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-ink-850 text-zinc-400 hover:text-white transition-colors lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2.5 shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white">
          <Activity className="w-5 h-5" />
        </div>
        <span className="font-bold text-white text-lg tracking-tight hidden sm:block">SantiSOFT</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-0.5">
          {isCronograma ? (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              <span>Cronograma MEDCURSO</span>
            </span>
          ) : (
            <>
              {areaName && <span className="truncate">{areaName}</span>}
              {lesson && (
                <>
                  <span className="text-ink-800">/</span>
                  <span className="text-zinc-400">Aula {lesson.number}</span>
                </>
              )}
            </>
          )}
        </div>
        <h1 className="text-sm sm:text-base font-semibold text-white truncate leading-tight">
          {isCronograma
            ? 'Cronograma de Estudos — MEDCURSO 2026'
            : lesson
              ? lesson.title
              : 'Selecione uma aula para começar'}
        </h1>
      </div>

      {!isCronograma && area && totalCount > 0 && (
        <div className="flex items-center gap-3 shrink-0 w-28 sm:w-40 hidden md:flex">
          <div className="flex-1">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-1">
              <span>Área</span>
              <span className="tabular-nums font-medium text-zinc-300">{pct}%</span>
            </div>
            <div className="h-1.5 bg-ink-850 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 tabular-nums hidden lg:block">
            {completedCount}/{totalCount}
          </div>
        </div>
      )}

      {/* Banco de Questões */}
      <a
        href={BANCO_QUESTOES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-ink-850 transition-colors shrink-0 hidden sm:flex"
        title="Banco de Questões (abre em nova aba)"
      >
        <BookOpen className="w-4 h-4" />
        <span className="hidden md:inline">Banco de Questões</span>
      </a>

      {/* Admin button */}
      {isAdmin && (
        <button
          onClick={onOpenAdmin}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-600/10 transition-colors shrink-0"
          title="Painel do Administrador"
        >
          <Shield className="w-4 h-4" />
          <span className="hidden md:inline">Admin</span>
        </button>
      )}

      <button
        onClick={onBackToHome}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-ink-850 transition-colors shrink-0"
        aria-label="Voltar aos cursos"
        title="Voltar aos cursos"
      >
        <Home className="w-4 h-4" />
        <span className="hidden md:inline">Cursos</span>
      </button>

      {/* User Indicator / Sync Status */}
      {user ? (
        <div className="flex items-center gap-2 shrink-0">
          {/* Cloud Sync State */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-ink-850/60 border border-ink-875">
            {isSyncing ? (
              <>
                <Loader2 className="w-3.5 h-3.5 text-red-500 animate-spin" />
                <span className="text-zinc-400">Sincronizando...</span>
              </>
            ) : (
              <>
                <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400/90 font-medium">Nuvem ativa</span>
              </>
            )}
          </div>

          {/* User Email Pill */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-ink-850 border border-ink-875 text-xs text-zinc-300 max-w-[120px] sm:max-w-[170px]"
            title={`Conectado como: ${user.email}`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="truncate font-medium">{user.email}</span>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-red-400 hover:bg-red-600/10 transition-colors"
            title="Sair da conta"
            aria-label="Sair"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      ) : (
        <button
          onClick={onOpenAuthModal}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-md shadow-red-600/30 transition-all active:scale-95 shrink-0"
          title="Entrar para sincronizar seu progresso na nuvem"
        >
          <Cloud className="w-3.5 h-3.5 animate-pulse" />
          <span>Entrar / Sincronizar</span>
        </button>
      )}

      {/* Profile badge */}
      {profile && (
        <button
          onClick={onSwitchProfile}
          className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-full hover:bg-ink-850 transition-colors shrink-0"
          title="Trocar perfil de estudo"
        >
          {avatar?.type === 'image' ? (
            <img src={avatar.value} alt={profile.name} className="w-7 h-7 rounded-full object-cover" />
          ) : (
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${avatarColor}cc, ${avatarColor}66)` }}
            >
              <User className="w-4 h-4 text-white/80" />
            </div>
          )}
          <span className="text-xs text-zinc-300 font-medium hidden xl:block max-w-[80px] truncate">
            {profile.name}
          </span>
        </button>
      )}
    </header>
  );
}


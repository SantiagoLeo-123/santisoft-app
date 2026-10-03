import { useState, useEffect, useCallback } from 'react';
import { Activity, Mail, Lock, X, AlertCircle, Loader2, Cloud, CheckCircle2, UserPlus, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) {
  const { login, signUp } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
      setError('');
      setSuccess('');
    }
  }, [isOpen, defaultMode]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Por favor, informe seu e-mail.');
      return;
    }
    if (!password) {
      setError('Por favor, informe sua senha.');
      return;
    }

    if (mode === 'signup') {
      if (password.length < 4) {
        setError('A senha deve conter pelo menos 4 caracteres.');
        return;
      }
      if (password !== confirmPassword) {
        setError('As senhas não coincidem.');
        return;
      }

      setLoading(true);
      const res = await signUp(cleanEmail, password);
      setLoading(false);

      if (res.success) {
        setSuccess('Cadastro realizado e sincronizado com sucesso!');
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        setError(res.error || 'Erro ao realizar cadastro.');
      }
    } else {
      setLoading(true);
      const res = await login(cleanEmail, password);
      setLoading(false);

      if (res.success) {
        setSuccess('Login realizado com sucesso! Sincronizando dados...');
        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        setError(res.error || 'E-mail ou senha incorretos.');
      }
    }
  }, [email, password, confirmPassword, mode, login, signUp, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-ink-900 border border-ink-875 rounded-2xl shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-ink-850 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/30">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>SantiSOFT</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-600/30">
                  Nuvem
                </span>
              </h2>
              <p className="text-xs text-zinc-400">MEDCURSO 2026 — Sincronização em Tempo Real</p>
            </div>
          </div>

          {/* Sync Highlight Pill */}
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-ink-925 border border-ink-850 mb-6">
            <Cloud className="w-4 h-4 text-red-500 shrink-0" />
            <p className="text-xs text-zinc-300">
              Conecte sua conta para salvar suas aulas, tarefas do cronograma e histórico de questões.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex p-1 bg-ink-925 rounded-xl border border-ink-875 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setSuccess('');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Entrar</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError('');
                setSuccess('');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Cadastrar</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@medcurso.com"
                  autoFocus
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? 'Mínimo de 4 caracteres' : 'Sua senha'}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="animate-fade-in">
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Confirmar Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repita a senha criada"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-600/10 border border-red-600/25 text-red-400 text-xs animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-600/10 border border-emerald-600/25 text-emerald-400 text-xs animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>{success}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !email.trim() || !password}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{mode === 'login' ? 'Entrando...' : 'Cadastrando...'}</span>
                </>
              ) : (
                <>
                  <Cloud className="w-4 h-4" />
                  <span>{mode === 'login' ? 'Entrar e Sincronizar' : 'Criar Conta e Conectar'}</span>
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-ink-875/80 text-center">
            <p className="text-[11px] text-zinc-500">
              {mode === 'login' ? (
                <>
                  Não possui uma senha ainda?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                    }}
                    className="text-red-400 hover:underline font-medium"
                  >
                    Cadastre-se aqui
                  </button>
                </>
              ) : (
                <>
                  Já possui conta cadastrada?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError('');
                    }}
                    className="text-red-400 hover:underline font-medium"
                  >
                    Faça login aqui
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

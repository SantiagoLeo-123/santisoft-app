import { useState, useCallback } from 'react';
import { Activity, Mail, Lock, ArrowRight, AlertCircle, Loader2, KeyRound, ShieldCheck } from 'lucide-react';
import { authApi } from '@/lib/auth';

interface LoginScreenProps {
  onLogin: (email: string, isAdmin: boolean) => void;
}

type Mode = 'initial' | 'checking' | 'login' | 'firstAccess' | 'setPassword';

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [mode, setMode] = useState<Mode>('initial');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmitEmail = useCallback(async () => {
    if (!email.trim()) return;
    setError('');
    setLoading(true);
    setMode('checking');

    try {
      const result = await authApi.checkEmail(email);
      if (!result.allowed) {
        setError('Acesso restrito. Solicite a liberação ao administrador.');
        setMode('initial');
        setLoading(false);
        return;
      }
      setIsAdmin(result.isAdmin);
      if (result.hasPassword) {
        setMode('login');
      } else {
        setMode('firstAccess');
      }
    } catch {
      setError('Erro de conexão. Tente novamente.');
      setMode('initial');
    }
    setLoading(false);
  }, [email]);

  const handleLogin = useCallback(async () => {
    if (!password) return;
    setError('');
    setLoading(true);

    try {
      const result = await authApi.login(email, password);
      if (result.success) {
        onLogin(result.email ?? email, result.isAdmin ?? false);
        return;
      }
      setError(result.error ?? 'Erro ao fazer login');
    } catch {
      setError('Erro de conexão. Tente novamente.');
    }
    setLoading(false);
  }, [email, password, onLogin]);

  const handleSetPassword = useCallback(async () => {
    if (password.length < 4) {
      setError('A senha deve ter no mínimo 4 caracteres');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const result = await authApi.setPassword(email, password);
      if (result.success) {
        onLogin(email, isAdmin);
        return;
      }
      setError(result.error ?? 'Erro ao cadastrar senha');
    } catch {
      setError('Erro de conexão. Tente novamente.');
    }
    setLoading(false);
  }, [email, password, confirmPassword, isAdmin, onLogin]);

  const handleBack = () => {
    setMode('initial');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-ink-950 px-4 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30 mb-4">
            <Activity className="w-9 h-9" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">SantiSOFT</h1>
          <p className="text-sm text-zinc-500 mt-1">MEDCURSO 2026 — Residência Médica</p>
        </div>

        {/* Card */}
        <div className="bg-ink-900/80 backdrop-blur-xl border border-ink-875 rounded-3xl p-8 shadow-2xl">
          {/* Initial: email input */}
          {mode === 'initial' && (
            <>
              <h2 className="text-lg font-semibold text-white mb-1">Bem-vindo</h2>
              <p className="text-sm text-zinc-500 mb-6">Digite seu e-mail para continuar</p>

              <div className="relative mb-4">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmitEmail()}
                  placeholder="seu@email.com"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-600/10 border border-red-600/20 mb-4 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-red-400">{error}</p>
                </div>
              )}

              <button
                onClick={handleSubmitEmail}
                disabled={!email.trim() || loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-600/20"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Continuar
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          )}

          {/* Checking: loading */}
          {mode === 'checking' && (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-4" />
              <p className="text-sm text-zinc-500">Verificando acesso...</p>
            </div>
          )}

          {/* Login: email + password */}
          {mode === 'login' && (
            <>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <h2 className="text-lg font-semibold text-white">Entrar</h2>
              </div>
              <p className="text-sm text-zinc-500 mb-6">{email}</p>

              <div className="relative mb-4">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Sua senha"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-600/10 border border-red-600/20 mb-4 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-red-400">{error}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                disabled={!password || loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-600/20 mb-3"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Entrar
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={handleBack}
                className="w-full text-xs text-zinc-500 hover:text-zinc-300 transition-colors py-1"
              >
                Voltar
              </button>
            </>
          )}

          {/* First access: prompt to set password */}
          {mode === 'firstAccess' && (
            <>
              <div className="flex items-center gap-2 mb-1">
                <KeyRound className="w-4 h-4 text-red-500" />
                <h2 className="text-lg font-semibold text-white">Cadastrar Minha Senha</h2>
              </div>
              <p className="text-sm text-zinc-500 mb-6">
                Primeiro acesso para <span className="text-zinc-300">{email}</span>
              </p>

              <div className="relative mb-3">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nova senha (mín. 4 caracteres)"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="relative mb-4">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSetPassword()}
                  placeholder="Confirmar senha"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-600/10 border border-red-600/20 mb-4 animate-fade-in">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-red-400">{error}</p>
                </div>
              )}

              <button
                onClick={handleSetPassword}
                disabled={!password || !confirmPassword || loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-600/20 mb-3"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Cadastrar e Entrar
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={handleBack}
                className="w-full text-xs text-zinc-500 hover:text-zinc-300 transition-colors py-1"
              >
                Voltar
              </button>
            </>
          )}
        </div>

        <p className="text-center text-xs text-zinc-700 mt-6">
          SantiSOFT © 2026 — Acesso restrito a usuários autorizados
        </p>
      </div>
    </div>
  );
}

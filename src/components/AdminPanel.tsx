import { useState, useCallback, useEffect } from 'react';
import { Shield, UserPlus, UserMinus, Loader2, AlertCircle, X, Mail, Crown, Check } from 'lucide-react';
import { authApi, type WhitelistEntry } from '@/lib/auth';

interface AdminPanelProps {
  adminEmail: string;
  onClose: () => void;
}

export function AdminPanel({ adminEmail, onClose }: AdminPanelProps) {
  const [list, setList] = useState<WhitelistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const fetchList = useCallback(async () => {
    setLoading(true);
    const result = await authApi.adminList(adminEmail);
    if (result.error) {
      setError(result.error);
    } else {
      setList(result.list);
    }
    setLoading(false);
  }, [adminEmail]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleAdd = useCallback(async () => {
    if (!newEmail.trim()) return;
    setError('');
    setSuccess('');
    setActionLoading(true);

    const result = await authApi.adminAdd(adminEmail, newEmail);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(`Email ${newEmail.trim()} adicionado à whitelist`);
      setNewEmail('');
      await fetchList();
    }
    setActionLoading(false);
  }, [adminEmail, newEmail, fetchList]);

  const handleRemove = useCallback(async (email: string) => {
    setError('');
    setSuccess('');
    setActionLoading(true);

    const result = await authApi.adminRemove(adminEmail, email);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(`Email ${email} removido da whitelist`);
      await fetchList();
    }
    setActionLoading(false);
  }, [adminEmail, fetchList]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg max-h-[85vh] flex flex-col bg-ink-900 border border-ink-875 rounded-2xl shadow-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-ink-875">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-red-600/15 border border-red-600/20">
              <Shield className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Painel do Administrador</h2>
              <p className="text-[10px] text-zinc-500">{adminEmail}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-ink-850 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-4">
          {/* Add email */}
          <div className="mb-5">
            <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider mb-2">
              Adicionar à Whitelist
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  placeholder="email@exemplo.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-ink-925 border border-ink-875 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <button
                onClick={handleAdd}
                disabled={!newEmail.trim() || actionLoading}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {actionLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Adicionar
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-600/10 border border-red-600/20 mb-4 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <p className="text-xs text-red-400">{error}</p>
            </div>
          )}
          {success && (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-600/10 border border-emerald-600/20 mb-4 animate-fade-in">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <p className="text-xs text-emerald-400">{success}</p>
            </div>
          )}

          {/* Whitelist */}
          <div>
            <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider mb-2">
              Emails Autorizados ({list.length})
            </p>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 text-zinc-600 animate-spin" />
              </div>
            ) : (
              <div className="space-y-1.5">
                {list.map((entry) => (
                  <div
                    key={entry.email}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-ink-925 border border-ink-875"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ink-850 shrink-0">
                      {entry.is_admin ? (
                        <Crown className="w-4 h-4 text-red-500" />
                      ) : entry.has_password ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Mail className="w-4 h-4 text-zinc-500" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-200 truncate">{entry.email}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        {entry.is_admin && (
                          <span className="text-[10px] font-semibold text-red-400 bg-red-600/10 px-1.5 py-0.5 rounded">
                            Admin
                          </span>
                        )}
                        <span className={`text-[10px] ${entry.has_password ? 'text-emerald-500' : 'text-zinc-600'}`}>
                          {entry.has_password ? 'Senha cadastrada' : 'Aguardando primeiro acesso'}
                        </span>
                      </div>
                    </div>

                    {!entry.is_admin && (
                      <button
                        onClick={() => handleRemove(entry.email)}
                        disabled={actionLoading}
                        className="p-1.5 rounded-lg hover:bg-red-600/10 text-zinc-500 hover:text-red-500 transition-colors shrink-0"
                        title="Remover da whitelist"
                      >
                        <UserMinus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

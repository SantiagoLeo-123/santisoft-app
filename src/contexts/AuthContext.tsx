import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { authApi } from '@/lib/auth';
import type { AuthUser } from '@/types';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const sessionEmail = authApi.getSession();
    if (!sessionEmail) return null;
    const storedId = localStorage.getItem('santisoft:user_id') || `user-${btoa(sessionEmail).replace(/=/g, '').toLowerCase()}`;
    return {
      id: storedId,
      email: sessionEmail,
      isAdmin: sessionEmail === 'leodoscsgo2018@hotmail.com',
    };
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Initialize session from Supabase or localStorage
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (data?.session?.user && mounted) {
            const u = data.session.user;
            const email = u.email || '';
            const isAdmin = email === 'leodoscsgo2018@hotmail.com' || Boolean(u.user_metadata?.isAdmin);
            const authUser: AuthUser = {
              id: u.id,
              email,
              isAdmin,
            };
            setUser(authUser);
            authApi.saveSession(email);
            localStorage.setItem('santisoft:user_id', u.id);
            setIsLoading(false);
            return;
          }
        }

        // Local session fallback
        const sessionEmail = authApi.getSession();
        if (sessionEmail && mounted) {
          const storedId = localStorage.getItem('santisoft:user_id') || `user-${btoa(sessionEmail).replace(/=/g, '').toLowerCase()}`;
          setUser({
            id: storedId,
            email: sessionEmail,
            isAdmin: sessionEmail === 'leodoscsgo2018@hotmail.com',
          });
        }
      } catch (err) {
        console.warn('Error restoring auth session:', err);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    initAuth();

    // Listen to Supabase auth state changes if configured
    let subscription: { unsubscribe: () => void } | null = null;
    if (isSupabaseConfigured()) {
      try {
        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
          if (!mounted) return;
          if (session?.user) {
            const email = session.user.email || '';
            setUser({
              id: session.user.id,
              email,
              isAdmin: email === 'leodoscsgo2018@hotmail.com' || Boolean(session.user.user_metadata?.isAdmin),
            });
            authApi.saveSession(email);
            localStorage.setItem('santisoft:user_id', session.user.id);
          }
        });
        subscription = data.subscription;
      } catch {
        /* ignore */
      }
    }

    return () => {
      mounted = false;
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const openAuthModal = useCallback(() => setIsAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const normalized = email.trim().toLowerCase();
    if (!normalized || !password) {
      return { success: false, error: 'Preencha o e-mail e a senha.' };
    }

    setIsLoading(true);

    // 1. Try Supabase Auth first if configured
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: normalized,
          password,
        });

        if (!error && data?.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || normalized,
            isAdmin: normalized === 'leodoscsgo2018@hotmail.com' || Boolean(data.user.user_metadata?.isAdmin),
          };
          setUser(authUser);
          authApi.saveSession(normalized);
          localStorage.setItem('santisoft:user_id', authUser.id);
          setIsLoading(false);
          setIsAuthModalOpen(false);
          return { success: true };
        }
      } catch (err) {
        console.warn('Supabase auth sign in attempt failed, trying authApi:', err);
      }
    }

    // 2. Fallback to authApi (whitelist system / Edge function)
    try {
      const res = await authApi.login(normalized, password);
      if (res.success) {
        const authUser: AuthUser = {
          id: `user-${btoa(normalized).replace(/=/g, '').toLowerCase()}`,
          email: res.email || normalized,
          isAdmin: res.isAdmin ?? (normalized === 'leodoscsgo2018@hotmail.com'),
        };
        setUser(authUser);
        authApi.saveSession(normalized);
        localStorage.setItem('santisoft:user_id', authUser.id);
        setIsLoading(false);
        setIsAuthModalOpen(false);
        return { success: true };
      }
      setIsLoading(false);
      return { success: false, error: res.error || 'Credenciais inválidas.' };
    } catch (err: unknown) {
      setIsLoading(false);
      const msg = err instanceof Error ? err.message : 'Erro ao realizar login.';
      return { success: false, error: msg };
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const normalized = email.trim().toLowerCase();
    if (!normalized || !password) {
      return { success: false, error: 'Preencha todos os campos.' };
    }
    if (password.length < 4) {
      return { success: false, error: 'A senha deve ter no mínimo 4 caracteres.' };
    }

    setIsLoading(true);

    // 1. Try Supabase Auth signUp if configured
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: normalized,
          password,
        });

        if (!error && data?.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || normalized,
            isAdmin: normalized === 'leodoscsgo2018@hotmail.com',
          };
          setUser(authUser);
          authApi.saveSession(normalized);
          localStorage.setItem('santisoft:user_id', authUser.id);
          setIsLoading(false);
          setIsAuthModalOpen(false);
          return { success: true };
        }
      } catch (err) {
        console.warn('Supabase auth sign up attempt failed, trying authApi setPassword:', err);
      }
    }

    // 2. Fallback to authApi setPassword (whitelist / first access)
    try {
      const res = await authApi.setPassword(normalized, password);
      if (res.success) {
        const authUser: AuthUser = {
          id: `user-${btoa(normalized).replace(/=/g, '').toLowerCase()}`,
          email: normalized,
          isAdmin: normalized === 'leodoscsgo2018@hotmail.com',
        };
        setUser(authUser);
        authApi.saveSession(normalized);
        localStorage.setItem('santisoft:user_id', authUser.id);
        setIsLoading(false);
        setIsAuthModalOpen(false);
        return { success: true };
      }
      setIsLoading(false);
      return { success: false, error: res.error || 'Não foi possível cadastrar a conta.' };
    } catch (err: unknown) {
      setIsLoading(false);
      const msg = err instanceof Error ? err.message : 'Erro ao realizar cadastro.';
      return { success: false, error: msg };
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      if (isSupabaseConfigured()) {
        await supabase.auth.signOut();
      }
    } catch (err) {
      console.warn('Error during supabase signOut:', err);
    }
    authApi.clearSession();
    localStorage.removeItem('santisoft:user_id');
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: Boolean(user?.isAdmin),
      isLoading,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      login,
      signUp,
      logout,
    }),
    [user, isLoading, isAuthModalOpen, openAuthModal, closeAuthModal, login, signUp, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
export type { AuthContextType };


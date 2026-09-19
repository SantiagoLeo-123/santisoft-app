import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const AUTH_FUNCTION_URL = `${supabaseUrl}/functions/v1/auth`;

interface AuthResponse {
  allowed?: boolean;
  isAdmin?: boolean;
  hasPassword?: boolean;
  success?: boolean;
  email?: string;
  error?: string;
  list?: WhitelistEntry[];
}

export interface WhitelistEntry {
  email: string;
  is_admin: boolean;
  has_password: boolean;
  created_at: string;
  created_by: string | null;
}

async function callAuthFunction(body: Record<string, unknown>): Promise<AuthResponse> {
  const res = await fetch(AUTH_FUNCTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && res.status !== 403 && res.status !== 400 && res.status !== 401) {
    throw new Error(`Erro de conexão (${res.status})`);
  }

  const data = await res.json();
  return data;
}

export const authApi = {
  async checkEmail(email: string): Promise<{ allowed: boolean; isAdmin: boolean; hasPassword: boolean }> {
    const result = await callAuthFunction({ action: 'check-email', email });
    return {
      allowed: result.allowed ?? false,
      isAdmin: result.isAdmin ?? false,
      hasPassword: result.hasPassword ?? false,
    };
  },

  async setPassword(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    const result = await callAuthFunction({ action: 'set-password', email, password });
    return { success: result.success ?? false, error: result.error };
  },

  async login(email: string, password: string): Promise<{ success: boolean; email?: string; isAdmin?: boolean; error?: string }> {
    const result = await callAuthFunction({ action: 'login', email, password });
    return { success: result.success ?? false, email: result.email, isAdmin: result.isAdmin, error: result.error };
  },

  async adminAdd(adminEmail: string, newEmail: string): Promise<{ success: boolean; error?: string }> {
    const result = await callAuthFunction({ action: 'admin-add', adminEmail, newEmail });
    return { success: result.success ?? false, error: result.error };
  },

  async adminRemove(adminEmail: string, removeEmail: string): Promise<{ success: boolean; error?: string }> {
    const result = await callAuthFunction({ action: 'admin-remove', adminEmail, removeEmail });
    return { success: result.success ?? false, error: result.error };
  },

  async adminList(adminEmail: string): Promise<{ list: WhitelistEntry[]; error?: string }> {
    const result = await callAuthFunction({ action: 'admin-list', adminEmail });
    return { list: result.list ?? [], error: result.error };
  },
};

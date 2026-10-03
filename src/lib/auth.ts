import whitelistData from '../../public/whitelist.json';

export interface WhitelistEntry {
  email: string;
  is_admin: boolean;
  has_password: boolean;
  created_at: string;
}

interface StoredAuth {
  [email: string]: { password: string };
}

const ADMIN_EMAIL = whitelistData.adminEmail;
const WHITELIST_EMAILS: string[] = whitelistData.emails.map((e: string) => e.toLowerCase());
const PASSWORDS_KEY = 'santisoft:passwords';
const SESSION_KEY = 'santisoft:session';
const EXTRA_WHITELIST_KEY = 'santisoft:whitelist:extra';

function getStoredPasswords(): StoredAuth {
  try {
    return JSON.parse(window.localStorage.getItem(PASSWORDS_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function saveStoredPasswords(data: StoredAuth): void {
  window.localStorage.setItem(PASSWORDS_KEY, JSON.stringify(data));
}

function getExtraWhitelist(): string[] {
  try {
    return JSON.parse(window.localStorage.getItem(EXTRA_WHITELIST_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveExtraWhitelist(emails: string[]): void {
  window.localStorage.setItem(EXTRA_WHITELIST_KEY, JSON.stringify(emails));
}

function getAllWhitelistEmails(): string[] {
  const extra = getExtraWhitelist();
  return [...WHITELIST_EMAILS, ...extra.map((e) => e.toLowerCase())];
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export const authApi = {
  async checkEmail(email: string): Promise<{ allowed: boolean; isAdmin: boolean; hasPassword: boolean }> {
    const normalized = normalizeEmail(email);
    const isAllowed = getAllWhitelistEmails().includes(normalized);
    const isAdminUser = normalized === ADMIN_EMAIL.toLowerCase();
    const passwords = getStoredPasswords();
    const hasPassword = !!passwords[normalized];

    return {
      allowed: isAllowed,
      isAdmin: isAdminUser,
      hasPassword,
    };
  },

  async setPassword(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    if (password.length < 4) {
      return { success: false, error: 'A senha deve ter no mínimo 4 caracteres' };
    }
    const normalized = normalizeEmail(email);
    if (!getAllWhitelistEmails().includes(normalized)) {
      return { success: false, error: 'Email não autorizado' };
    }
    const passwords = getStoredPasswords();
    passwords[normalized] = { password };
    saveStoredPasswords(passwords);
    return { success: true };
  },

  async login(email: string, password: string): Promise<{ success: boolean; email?: string; isAdmin?: boolean; error?: string }> {
    const normalized = normalizeEmail(email);
    if (!getAllWhitelistEmails().includes(normalized)) {
      return { success: false, error: 'Email não autorizado' };
    }
    const passwords = getStoredPasswords();
    const stored = passwords[normalized];
    if (!stored) {
      return { success: false, error: 'Senha ainda não cadastrada' };
    }
    if (stored.password !== password) {
      return { success: false, error: 'Senha incorreta' };
    }
    return {
      success: true,
      email: normalized,
      isAdmin: normalized === ADMIN_EMAIL.toLowerCase(),
    };
  },

  async adminAdd(adminEmail: string, newEmail: string): Promise<{ success: boolean; error?: string }> {
    const normalizedAdmin = normalizeEmail(adminEmail);
    if (normalizedAdmin !== ADMIN_EMAIL.toLowerCase()) {
      return { success: false, error: 'Acesso negado' };
    }
    const normalizedNew = normalizeEmail(newEmail);
    if (getAllWhitelistEmails().includes(normalizedNew)) {
      return { success: false, error: 'Email já está na whitelist' };
    }
    const extra = getExtraWhitelist();
    extra.push(normalizedNew);
    saveExtraWhitelist(extra);
    return { success: true };
  },

  async adminRemove(adminEmail: string, removeEmail: string): Promise<{ success: boolean; error?: string }> {
    const normalizedAdmin = normalizeEmail(adminEmail);
    if (normalizedAdmin !== ADMIN_EMAIL.toLowerCase()) {
      return { success: false, error: 'Acesso negado' };
    }
    const normalizedRemove = normalizeEmail(removeEmail);
    if (normalizedRemove === ADMIN_EMAIL.toLowerCase()) {
      return { success: false, error: 'Você não pode remover a si mesmo' };
    }
    if (WHITELIST_EMAILS.includes(normalizedRemove)) {
      return { success: false, error: 'Este email faz parte da whitelist padrão e não pode ser removido' };
    }
    const extra = getExtraWhitelist().filter((e) => e !== normalizedRemove);
    saveExtraWhitelist(extra);
    const passwords = getStoredPasswords();
    delete passwords[normalizedRemove];
    saveStoredPasswords(passwords);
    return { success: true };
  },

  async adminList(adminEmail: string): Promise<{ list: WhitelistEntry[]; error?: string }> {
    const normalizedAdmin = normalizeEmail(adminEmail);
    if (normalizedAdmin !== ADMIN_EMAIL.toLowerCase()) {
      return { list: [], error: 'Acesso negado' };
    }
    const allEmails = getAllWhitelistEmails();
    const passwords = getStoredPasswords();
    const list: WhitelistEntry[] = allEmails.map((email) => ({
      email,
      is_admin: email === ADMIN_EMAIL.toLowerCase(),
      has_password: !!passwords[email],
      created_at: new Date().toISOString(),
    }));
    return { list };
  },

  saveSession(email: string): void {
    window.localStorage.setItem(SESSION_KEY, email);
  },

  getSession(): string | null {
    return window.localStorage.getItem(SESSION_KEY);
  },

  clearSession(): void {
    window.localStorage.removeItem(SESSION_KEY);
  },
};

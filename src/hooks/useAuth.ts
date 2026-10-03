import { useContext } from 'react';
import { AuthContext, AuthProvider } from '@/contexts/AuthContext';
import type { AuthContextType } from '@/contexts/AuthContext';

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
}

export { AuthProvider };
export type { AuthUser } from '@/types';

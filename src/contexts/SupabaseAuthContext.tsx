import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AuthContextType {
  isAuthenticated: boolean;
  email: string | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useSupabaseAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useSupabaseAuth must be used within SupabaseAuthProvider');
  return ctx;
};

export const SupabaseAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data }) => {
      setIsAuthenticated(!!data.session);
      setEmail(data.session?.user.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sessionNow) => {
      setIsAuthenticated(!!sessionNow);
      setEmail(sessionNow?.user.email ?? null);
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const login = async (emailAddr: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email: emailAddr, password });
    if (error) return { ok: false, error: error.message };
    setIsAuthenticated(!!data.session);
    setEmail(data.session?.user.email ?? null);
    return { ok: true };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



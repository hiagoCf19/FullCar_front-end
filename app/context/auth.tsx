"use client"
// hooks/useAuth.tsx
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import User from "../class/UserClass";

import { useRouter } from 'next/navigation';

export interface AuthContextType {
  token: string;
  user: User | null;
  setToken: (token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const user = new User(data.account);
        setUser(user);
        User.saveUserLocalStorage(user);
        setToken(data.token);
        router.push('/');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error: any) {
      throw new Error(error.message || "An error occurred during login");
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

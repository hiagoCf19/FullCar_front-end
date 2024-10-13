"use client"
// hooks/useAuth.tsx
import { ReactNode, createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import User from "../class/UserClass";

import { useRouter } from 'next/navigation';
import { UseSession } from "../hooks/useSession";
import { ErrorCode } from "../errors/ErrorsEnum";
import { toast } from "sonner";

export interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const { setUserDetails } = UseSession();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('token');
      setUserDetails(null);
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
        setUserDetails(user);
        User.saveUserLocalStorage(user);
        setToken(data.token);
        router.push('/');
      } else {
        if (response.status === 403) {
          throw new Error(ErrorCode.INVALID_CREDENTIALS);
        } else {
          throw new Error(ErrorCode.CONNECTION_API_ERROR);
        }
      }
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error(ErrorCode.CONNECTION_API_ERROR);
      } else {
        throw error;
      }
    }
  };

  const logout = () => {
    setToken('');
    setUserDetails(null);
    localStorage.removeItem('user')
    window.location.reload()
  };

  return (
    <AuthContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

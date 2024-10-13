"use client"
// hooks/useAuth.tsx
import { ReactNode, createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import User from "../class/UserClass";

import { useRouter } from 'next/navigation';
import { UseSession } from "../hooks/useSession";
import { ErrorCode } from "../errors/ErrorsEnum";
import { toast } from "sonner";
import api from "../services/apiService";
import axios from "axios";

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
      const response = await api.post("login", { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = new User(response.data.account);
      setUserDetails(user);
      User.saveUserLocalStorage(user);
      setToken(response.data.token);
      router.push('/');
      return response.data
    }
    catch (error) {

      if (axios.isAxiosError(error)) {
        if (error.status === 403) {
          throw new Error(ErrorCode.INVALID_CREDENTIALS);
        }
        if (error.code === "ERR_NETWORK") {
          throw new Error(ErrorCode.CONNECTION_API_ERROR);
        }
      }
      throw error;
    }
  };

  const logout = () => {
    setToken('');
    setUserDetails(null);
    localStorage.removeItem('user')
    setTimeout(() => {
      router.push('/login');
    }, 0);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

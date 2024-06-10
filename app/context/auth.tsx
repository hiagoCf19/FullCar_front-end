"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../components/hooks/useLocalStorage";

export interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage('token', '')

  useEffect(() => {
    !token && localStorage.removeItem('token')
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}


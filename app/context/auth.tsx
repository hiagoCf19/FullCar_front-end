"use client"
import { ReactNode, createContext, useContext, useEffect, } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { session } from "../services/session";
import { useUser } from "../hooks/useUser";

export interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setUser } = useUser()
  const [token, setToken] = useLocalStorage('token', '')

  useEffect(() => {
    !token ? null :
      session(token).then((user) => {
        setUser(user)
      })
    !token && localStorage.removeItem('token')
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}


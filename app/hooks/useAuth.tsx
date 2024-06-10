import { AuthContext, AuthContextType } from "@/app/context/auth";
import { useContext } from "react";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context;
}
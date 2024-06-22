
import { useContext } from "react";
import UserContext, { UserContextType } from "../context/user";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context;
}
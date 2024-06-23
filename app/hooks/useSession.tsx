import { AuthContext, AuthContextType } from "@/app/context/auth";
import { useContext } from "react";
import { UserDetails, UserDetailsContext } from "../context/user";

export const UseSession = (): UserDetails => {
  const context = useContext(UserDetailsContext)
  if (!context) {
    throw new Error('useSession deve ser usado dentro de um useSessionProvider')
  }
  return context;
}
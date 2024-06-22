"use client"
import { ReactNode, createContext, useState } from "react";
import User from "../class/UserClass";
export interface UserContextType {
  user: User | null;
  setUser: (token: User) => void;
}
export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User | null>(null);


  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
"use client"

import { createContext, useEffect, useState } from "react"
import User from "../class/UserClass"

export interface UserDetails {
  userDetails: User | null;
  setUserDetails: React.Dispatch<React.SetStateAction<User | null>>;
}
export const UserDetailsContext = createContext<UserDetails | null>(null);

export const UserDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<User | null>(User.recoverLocalUser());
  useEffect(() => {
    !userDetails && localStorage.removeItem('user')
  }, [userDetails])
  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  )
}
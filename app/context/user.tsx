"use client"
import { createContext, useEffect, useState } from "react";
import User from "../class/UserClass";
import { useAuth } from "../hooks/useAuth";

export interface UserDetails {
  userDetails: User | null;
  setUserDetails: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserDetailsContext = createContext<UserDetails | null>(null);

export const UserDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    const recoveredUser = User.recoverLocalUser();
    if (recoveredUser) {

      setUserDetails(recoveredUser);

    } else {
      localStorage.removeItem('user');
    }
  }, []);

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

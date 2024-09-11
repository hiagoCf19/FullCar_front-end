"use client"
import { AvatarFallback } from "@radix-ui/react-avatar";
import Header from "../components/header";
import { Avatar } from "@/app/base_ui/ui/avatar";
import User from "../class/UserClass";
import { UseSession } from "../hooks/useSession";
import { useEffect, useState } from "react";
import AccountInfo from "./components/account-info";

const ProfilePage = () => {
  const { userDetails, setUserDetails } = UseSession();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (<>
    <Header />
    <div className="sm:flex justify-center">
      <div className=" sm:mx-40 flex flex-col justify-center sm:w-[60%] ">
        <div className="flex flex-col items-center  py-6 px-4">
          <Avatar
            className="border flex items-center justify-center bg-primary-foreground border-primary size-28"
          >
            <AvatarFallback className="text-4xl font-semibold">
              {userDetails && (
                User.createFallback(userDetails.user_name)
              )}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-semibold py-5 text-muted-foreground">Minha conta</h1>
        </div>
        <AccountInfo
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      </div>
    </div>

  </>);
}

export default ProfilePage;
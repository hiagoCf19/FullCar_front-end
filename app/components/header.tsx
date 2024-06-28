"use client"
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

import { LogInIcon, MenuIcon, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import SetTheme from "./set-theme";
import { UseSession } from "../hooks/useSession";
import { DropdownMenuDemo } from "./User-Menu";
import { useAuth } from "../hooks/useAuth";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import User from "../class/UserClass";


const Header = () => {

  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { userDetails } = UseSession();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }


  return (
    <header className="p-2 sm:px-40 flex justify-between items-center border-b">

      <Image
        src="/logo.png"
        alt="fullcar"
        width={125}
        height={30}
        className="object-contain w-auto h-auto"
        priority
      />

      <Sheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setIsSheetOpen(true)}
          className="sm:hidden"
        >
          <MenuIcon />
        </Button>
        <SheetContent side={"left"} className="w-full border px-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="text-start" >
              {userDetails && (
                <div className="border-b pb-4 w-full flex gap-2 items-center">
                  <Avatar className="border justify-center items-center border-primary bg-primary-foreground size-12">
                    <AvatarFallback className="text-zinc-50 font-medium">
                      {User.createFallback(userDetails.user_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col pt-1">
                    <span>{userDetails.user_name}</span>
                    <span>{userDetails.email}</span>
                  </div>
                </div>
              )}

            </SheetDescription>
          </SheetHeader>

          <SetTheme />
          {!userDetails && (
            <SheetFooter className={` fixed bottom-0 left-0 right-0 bg-primary p-5 `}>
              <Link href={"/login"} className="text-zinc-50 flex items-center gap-3">
                <p className="text-xl font-medium">Login</p>
                <LogInIcon size={24} />
              </Link>
            </SheetFooter>
          )}
        </SheetContent>

      </Sheet>

      <div className="hidden sm:block">

        <div className="sm:flex gap-4 items-center">
          <SetTheme />
          <div className="h-7 w-px bg-muted-foreground" />
          {userDetails
            ?
            <DropdownMenuDemo userDetails={userDetails} />
            : <Link href={"/login"}>
              <Button variant={"outline"} size={"icon"}>
                <User2Icon size={20} />
              </Button>
            </Link>
          }


        </div>

      </div>

    </header>
  );
}

export default Header;
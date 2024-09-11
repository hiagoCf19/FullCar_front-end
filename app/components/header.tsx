"use client"
import Image from "next/image";
import { User2Icon } from "lucide-react";
import { Button } from "@/app/base_ui/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import SetTheme from "./set-theme";
import { UseSession } from "../hooks/useSession";
import { DropdownMenuDemo } from "./menu";


const Header = () => {
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
      <div className="relative w-32
        h-10">
        <Image
          src="/logo.svg"
          alt="fullcar"
          fill
          sizes="auto"
          className="object-cover"
        />

      </div>

      <div className="flex items-center gap-2">
        <div className="sm:hidden">
          <SetTheme />
        </div>

      </div>

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
"use client";
import Image from "next/image";
import { User2Icon } from "lucide-react";
import { Button } from "@/app/base_ui/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import SetTheme from "./set-theme";
import { UseSession } from "../../hooks/useSession";
import { DropdownMenuDemo } from "./menu";

const Header = () => {
  const { userDetails } = UseSession();

  return (
    <header className="absolute z-50 w-full p-2 sm:px-40 flex justify-between items-center">
      <div className="relative w-32 md:w-44 md:h-14 h-9">
        <Image
          src="/logo_white.png"
          alt="fullcar"
          fill
          sizes="auto"
          className="object-cover hidden dark:block"
        />
        <Image
          src="/logo_primary.png"
          alt="fullcar"
          fill
          sizes="auto"
          className="object-cover dark:hidden"
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
          {userDetails ? (
            <DropdownMenuDemo userDetails={userDetails} />
          ) : (
            <Link href={"/login"}>
              <Button variant={"outline"} size={"icon"}>
                <User2Icon size={20} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

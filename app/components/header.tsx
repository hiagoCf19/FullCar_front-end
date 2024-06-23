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
import { LogInIcon, MenuIcon, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import SetTheme from "./set-theme";
import User from "../class/UserClass";


const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)


  return (
    <header className="p-2 sm:px-40 flex justify-between items-center border-b">
      <Image src="/logo.png" alt="" width={125} height={30} />
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
        <SheetContent side={"left"} className="w-full border">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>

            </SheetDescription>
          </SheetHeader>

          <SetTheme />

          <SheetFooter className="fixed bottom-0 left-0 right-0 bg-primary p-5">
            <Link href={"/login"} className="text-zinc-50 flex items-center gap-3">
              <p className="text-xl font-medium">Login</p>
              <LogInIcon size={24} />
            </Link>
          </SheetFooter>
        </SheetContent>

      </Sheet>
      <div className="hidden sm:block">
        <div className="sm:flex gap-4 items-center">
          <Link href={"/login"}>
            <Button variant={"outline"} size={"icon"}>
              <User2Icon size={20} />
            </Button>
          </Link>
          <div className="h-7 w-px bg-muted-foreground" />
          <SetTheme />
        </div>

      </div>
    </header>
  );
}

export default Header;
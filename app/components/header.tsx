"use client"
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { LogInIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(true)
  return (
    <header className="p-2 flex justify-between items-center border-b">
      <Image src="/logo.png" alt="" width={125} height={30} />
      <Sheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setIsSheetOpen(true)}
        >
          <MenuIcon />
        </Button>
        <SheetContent side={"left"} className="w-full border">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              descr
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="fixed bottom-0 left-0 right-0 bg-primary p-5">
            <Link href={"/login"} className="text-zinc-50 flex items-center gap-3">
              <p className="text-xl font-medium">Login</p>
              <LogInIcon size={24} />
            </Link>
          </SheetFooter>
        </SheetContent>

      </Sheet>

    </header>
  );
}

export default Header;
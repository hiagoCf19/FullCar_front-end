import { AlignJustify, HomeIcon, LogInIcon, PlusCircle, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet"
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import User from "../class/UserClass";
import Link from "next/link";
import { UseSession } from "../hooks/useSession";


const Footer = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { userDetails } = UseSession();
  return (<>
    <footer className="fixed bottom-0 w-full   px-4 pt-1 flex bg-background ">
      <Button variant={"ghost"} className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary" size={"icon"}>
        <HomeIcon className="size-6" />
        <span className="text-sm">Início</span>
      </Button>

      <Button variant={"ghost"} className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary" size={"icon"}>
        <Search className="size-6" />
        <span className="text-sm">Buscar</span>
      </Button>
      <Button variant={"ghost"} className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary" size={"icon"}>
        <PlusCircle className="size-6" />
        <span className="text-sm">Anunciar</span>
      </Button>

      <Sheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <Button
          variant={"ghost"}
          className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary"
          size={"icon"}
          onClick={() => setIsSheetOpen(true)}
        >
          <AlignJustify className="size-6" />
          <span className=" text-sm">Menu</span>
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


          content
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



    </footer>
  </>);
}

export default Footer;
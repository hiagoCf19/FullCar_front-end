"use client"
import { AlignJustify, HomeIcon, LogInIcon, PlusCircle, Search } from "lucide-react";
import { Button } from "@/app/base_ui/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/app/base_ui/ui/sheet"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/base_ui/ui/alert-dialog"

import { Avatar } from "@/app/base_ui/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import User from "../class/UserClass";
import Link from "next/link";
import { UseSession } from "../hooks/useSession";
import { useAuth } from "../hooks/useAuth";



const BottomNavigation = () => {
  const { logout } = useAuth();
  const { userDetails } = UseSession();
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (<>
    <div className="fixed bottom-0 w-full   px-4 py-2 flex bg-background ">
      <Button
        variant={"ghost"}
        className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary"
        size={"icon"}
      >
        <Link href={"/"} className="flex flex-col items-center">
          <HomeIcon className="size-6" />
          <span className="text-sm">Início</span>
        </Link>
      </Button>

      <Button
        variant={"ghost"}
        className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary"
        size={"icon"}

      >

        <Search className="size-6" />
        <span className="text-sm">Buscar</span>

      </Button>

      {!userDetails ?
        <Button
          variant={"ghost"}
          className="flex flex-col h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary"
          size={"icon"}
          onClick={() => setIsOpenDialog(true)}
        >

          <PlusCircle className="size-6" />
          <span className="text-sm">Anunciar</span>


        </Button>

        : <Button
          variant={"ghost"}
          className=" h-full flex-1 text-zinc-600 hover:bg-background hover:text-primary"
          size={"icon"}
        >
          <Link href={"/anuncios"} className="flex flex-col items-center">
            <PlusCircle className="size-6" />
            <span className="text-sm">Anunciar</span>

          </Link>

        </Button>}
      {/* */}




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

        <SheetContent side={"bottom"} className="w-full border px-4 h-screen sm:h-auto">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription asChild className="text-start" >
              {userDetails && (
                <div className="border-b pb-4 w-full flex gap-2 items-center">
                  <Avatar className="border justify-center items-center border-primary bg-primary-foreground size-12">
                    <AvatarFallback className="text-zinc-50 font-medium">
                      {User.createFallback(userDetails.user_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col pt-1">
                    <span className="text-secondary-foreground">{userDetails.user_name}</span>
                    <span>{userDetails.email}</span>
                  </div>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
          <div>
            content
            {userDetails && (
              <p onClick={logout}>sair</p>
            )}
          </div>
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
    </div>
    <div className="h-12" />

    <AlertDialog
      open={isOpenDialog}
      onOpenChange={setIsOpenDialog}

    >
      <AlertDialogContent className="w-[95%]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Crie um anúncio gratuito
          </AlertDialogTitle>
          <AlertDialogDescription>
            Para criar um anúncio, faça login ou cadastre-se. Clique em 'Prosseguir' para continuar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row-reverse w-full items-center justify-center gap-5">
          <AlertDialogCancel className="flex-1">
            Cancelar
          </AlertDialogCancel>

          <Link href={"/login"} className="flex-1 mt-2 p-2 rounded-md text-center sm:mt-0 bg-primary text-zinc-50">
            Prosseguir
          </Link>


        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


  </>);
}

export default BottomNavigation;
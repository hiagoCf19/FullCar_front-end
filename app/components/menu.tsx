"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/base_ui/ui/dropdown-menu"
import User from "../class/UserClass";
import { Car, ChevronDown, LogOutIcon, Settings2, User2 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

interface DropDownMenuDemoProps {
  userDetails: User;
}

export function DropdownMenuDemo({ userDetails }: DropDownMenuDemoProps) {
  const { logout } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="text-primary flex items-center gap-2 cursor-pointer">
          {User.formatName(userDetails.user_name)}
          <ChevronDown size={20} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem className="flex gap-2 items-center" >
              <User2 size={18} />
              Perfil
            </DropdownMenuItem>

          </Link>
          <Link href={"/anuncios/meus-anuncios"}>
            <DropdownMenuItem className="flex gap-2 items-center" >
              <Car size={18} />
              Meus Anuncios
            </DropdownMenuItem>

          </Link>
          <DropdownMenuItem className="flex gap-2 items-center">
            <Settings2 size={18} />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-2 items-center"
            onClick={logout}
          >
            <LogOutIcon size={18} />
            Sair
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

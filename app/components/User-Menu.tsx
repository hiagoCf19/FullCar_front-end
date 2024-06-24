import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

import User from "../class/UserClass";
import { ChevronDown, LogOutIcon, Settings, Settings2, User2 } from "lucide-react";
interface DropDownMenuDemoProps {
  userDetails: User;
}
export function DropdownMenuDemo({ userDetails }: DropDownMenuDemoProps) {
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
          <DropdownMenuItem className="flex gap-2 items-center">
            <User2 size={18} />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center">
            <Settings2 size={18} />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center">
            <LogOutIcon size={18} />
            Sair
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

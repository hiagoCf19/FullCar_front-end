import User from "@/app/class/UserClass";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { UserDetails } from "@/app/context/user";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Edit, Edit2 } from "lucide-react";
import { useState } from "react";

const AccountInfo = ({ userDetails }: UserDetails) => {
  const [isEditable, setiseditable] = useState(false)
  return (
    <form className="px-4">
      <Label className="flex flex-col gap-2">
        Nome:
        <div>
          {isEditable ? <Input
            type="text"
            placeholder="Seu nome"
            className="placeholder:italic focus-visible:ring-1"
          />
            : <div
              className="flex justify-between border-b pb-2"
            >
              <span className="text-primary">
                {userDetails?.user_name}
              </span>
              <Edit2 size={18} />
            </div>
          }

        </div>
      </Label>

    </form>
  );
}

export default AccountInfo;

import { Label } from "@radix-ui/react-dropdown-menu";
import User from "@/app/class/UserClass";
import { Button } from "@/app/components/ui/button";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { Input } from "@/app/components/ui/input";
import { useAuth } from "@/app/hooks/useAuth";


interface AccountInfoProps {
  userDetails: User | null;
}
const AccountInfo = ({ userDetails }: AccountInfoProps) => {
  if (!userDetails) {
    return redirect("/")
  }
  const { token } = useAuth();
  const [inEditing, setInEditing] = useState(false);
  const [user_name, setUser_name] = useState(userDetails.user_name);
  const [email, setEmail] = useState(userDetails.email);

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: userDetails.id,
      user_name: user_name,
      email: email,
    };
    User.updateUserDetails(token, data)
    setInEditing(false);
  }
  const EnableEditing = () => {
    setInEditing(true);
  }
  return (
    <>
      <form className="px-4 space-y-3" onSubmit={handleEdit}>
        <Label className="flex flex-col ">
          <span className="text-primary">Nome</span>
          <div
            className={`flex justify-between border-b ${!inEditing && 'pb-2'}`}
          >
            {!inEditing
              ? <span className="pt-1 text-muted-foreground">
                {userDetails.user_name}
              </span>
              : <Input

                className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                onChange={(e) => setUser_name(e.target.value)}
                autoFocus
              />
            }
          </div>
        </Label>
        <Label className="flex flex-col">
          <span className="text-primary"> Email</span>
          <div
            className={`flex justify-between border-b ${!inEditing && 'pb-2'}`}
          >
            {!inEditing
              ? <span className="pt-1 text-muted-foreground">
                {userDetails.email}
              </span>
              : <Input
                className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            }
          </div>

        </Label>
        <span className="py-2 block text-muted-foreground">Cadastrou-se em {User.formatDate(userDetails)}</span>
        <div className="flex justify-center pt-4">
          {inEditing &&
            <Button
              type="submit"
              variant={"secondary"}
              className="w-[50%] sm:w-[30%]"

            >
              Concluir
            </Button>
          }
        </div>
      </form>
      {
        !inEditing &&
        <div className="flex justify-center w-full ">
          <Button
            type="button"
            variant={"secondary"}
            className="w-[50%] sm:w-[30%]"
            onClick={EnableEditing}
          >
            Editar
          </Button>
        </div>
      }
    </>
  );
}

export default AccountInfo;
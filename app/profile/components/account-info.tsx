
import { Label } from "@radix-ui/react-dropdown-menu";
import User from "@/app/class/UserClass";
import { Button } from "@/app/components/ui/button";
import { redirect } from "next/navigation";


interface AccountInfoProps {
  userDetails: User | null;
}
const AccountInfo = ({ userDetails }: AccountInfoProps) => {
  if (!userDetails) {
    return redirect("/")
  }
  return (
    <form className="px-4 space-y-3">
      <Label className="flex flex-col gap-2 text-primary">
        Nome:
        <div
          className="flex justify-between border-b pb-2"
        >
          <span className="text-muted-foreground">
            {userDetails.user_name}
          </span>
        </div>
      </Label>
      <Label className="flex flex-col gap-2 text-primary">
        Email
        <div
          className="flex justify-between border-b pb-2"
        >
          <span className="text-muted-foreground">
            {userDetails.email}
          </span>
        </div>

      </Label>
      <span className="py-2 block text-muted-foreground">Cadastrou-se em {User.formatDate(userDetails)}</span>
      <div className="flex justify-center py-4">
        <Button
          type="submit"
          variant={"secondary"}
          className="w-[50%]"
        >
          Editar
        </Button>
      </div>
    </form>
  );
}

export default AccountInfo;
"use client"
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import InputPassword from "./components/input_Password";
import { fetchNewAccount } from "../services/NewAccount";
import { RequestLogin } from "../services/login";
import { useAuth } from "../hooks/useAuth";
import { UseSession } from "../hooks/useSession";

const NewAccount = () => {
  const { setToken } = useAuth();
  const { setUserDetails } = UseSession();
  const [first_name, setFirst_name] = useState<string>("")
  const [second_name, setsecond_name] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [password_confirmation, setPassword_confirmation] = useState<string>("")
  const [isSamePassword, setIsSamePassword] = useState<boolean>(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      setIsSamePassword(false);
      toast.warning("As senhas devem ser iguais!")
      return
    }

    try {
      const user_name = first_name + "" + second_name
      const response = await fetchNewAccount({ email, user_name, password, setToken });
      if (response.ok) {
        RequestLogin({ setToken, setUserDetails, email, password })

      } else {
        const error = await response.json();
        toast.warning(error.message);
      }
    } catch (error: any) {
      toast.error("erro :", error.message);
    }


  }
  return (
    <DialogContent className="w-[95%]">
      <DialogHeader>
        <DialogTitle >Cadastre-se</DialogTitle>
        <DialogDescription asChild className="space-y-4">
          <div>
            <p className="text-justify">Ao se cadastrar vocẽ poderá nunciar seus veículos na plataforma</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4">
              <Label className="w-full text-start space-y-2">
                <span className="text-start">Nome:</span>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="placeholder:italic focus-visible:ring-1"
                  onChange={(e) => setFirst_name(e.target.value)}
                />

              </Label>
              <Label className="w-full text-start space-y-2">
                <span className="text-start">Sobrenome:</span>
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  className="placeholder:italic focus-visible:ring-1"
                  onChange={(e) => setsecond_name(e.target.value)}
                />

              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">E-mail:</span>

                <Input
                  type="email"
                  placeholder="E-mail"
                  className="placeholder:italic focus-visible:ring-1"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </Label>
              <Label className="w-full text-start space-y-2">
                <span className="text-start">Senha:</span>
                <InputPassword
                  value={password}
                  placeholder="Senha"
                  setter={setPassword}
                  isSamePassword={isSamePassword}
                />

              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">Confirmação de senha:</span>
                <InputPassword
                  value={password_confirmation}
                  placeholder="Confirme sua senha"
                  setter={setPassword_confirmation}
                  isSamePassword={isSamePassword}
                />
                {!isSamePassword && (<span className="block text-destructive">As senhas devem ser iguais!</span>)}
              </Label>

              <Button type="submit" >
                Cadastre-se
              </Button>
            </form>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

export default NewAccount;
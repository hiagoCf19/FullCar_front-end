"use client"
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import InputPassword from "./components/input_Password";

const NewAccount = () => {
  const [user_name, setUser_name] = useState<String>("")
  const [email, setEmail] = useState<String>("")
  const [password, setPassword] = useState<string>("")
  const [password_confirmation, setPassword_confirmation] = useState<string>("")
  const [isSamePassword, setIsSamePassword] = useState<Boolean>(true)


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setIsSamePassword(false);
      toast.warning("As senhas devem ser iguais!")
      return
    }
    console.log({
      user_name,
      email,
      password,
      password_confirmation
    })
  }
  return (
    <DialogContent >
      <DialogHeader>
        <DialogTitle >Cadastre-se</DialogTitle>
        <DialogDescription className="space-y-4">
          <p className="text-justify">Ao se cadastrar vocẽ poderá nunciar seus veículos na plataforma</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4">
            <Label className="w-full text-start space-y-2">
              <span className="text-start">Nome:</span>
              <Input
                type="text"
                placeholder="Seu nome"
                className="placeholder:italic"
                onChange={(e) => setUser_name(e.target.value)}

              />

            </Label>
            <Label className="w-full text-start space-y-2">
              <span className="text-start">E-mail:</span>

              <Input
                type="email"
                placeholder="E-mail"
                className="placeholder:italic"
                onChange={(e) => setEmail(e.target.value)}

              />
            </Label>
            <Label className="w-full text-start space-y-2">
              <span className="text-start">Senha:</span>
              <InputPassword
                value={password}
                placeholder="Senha"
                setter={setPassword}
              />
            </Label>
            <Label className="w-full text-start space-y-2">
              <span className="text-start">Confirmação de senha:</span>
              <InputPassword
                value={password_confirmation}
                placeholder="Confirme sua senha"
                setter={setPassword_confirmation}
              />
            </Label>
            <Button type="submit" >
              Cadastre-se
            </Button>
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

export default NewAccount;
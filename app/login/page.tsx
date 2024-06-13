"use client"

import { FormEvent, useState } from "react";
import { RequestLogin } from "../services/login";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { toast } from "sonner";



const LoginPage = () => {
  const { setToken } = useAuth();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [visibleInvalidCredentialAlert, setVisibleInvalidCredentialAlert] = useState<boolean>(false)


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await RequestLogin({ setToken, email, password })
      if (response.ok) {
        setPassword("")
        setEmail("")
      } else {
        setVisibleInvalidCredentialAlert(true)
      }
    } catch (error) {
      toast.error("Erro ao se conectar com o servidor.")
    }
  }

  return (
    <div className="p-5 flex flex-col ">
      <div className=" flex justify-center relative w-full h-[120px]">
        <Image src="/logo.png" alt="" fill />
      </div>
      <div className="flex justify-center mt-5 flex-col items-center">
        <h1 className="text-primary font-bold text-4xl">Login</h1>
        <p className="text-xl font-medium text-muted-foreground">Bem vindo de volta!</p>
      </div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <div className="space-y-4 w-full">
          <Label className="flex flex-col gap-2">
            E-mail
            <Input
              type="text"
              placeholder="e-mail"
              className="placeholder:text-base rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

          </Label>
          <Label className="flex flex-col gap-2">
            Senha
            <Input
              type="text"
              placeholder="senha"
              className="placeholder:text-base rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {visibleInvalidCredentialAlert && <span className="text-destructive">E-mail ou senha incorretos!</span>}

          </Label>

        </div>
        <Button variant={"link"} className="w-full text-sm flex justify-end">Esqueceu sua senha?</Button>

        <Button size={"lg"} type="submit" className="w-full text-xl my-4">Login</Button>
        <Button size={"lg"} variant={"secondary"} className="w-full text-xl text-primary ">Cadastre-se</Button>
      </form>
    </div >
  );
}

export default LoginPage;
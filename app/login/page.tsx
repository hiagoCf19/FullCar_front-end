"use client"

import { FormEvent, useState } from "react";
import { RequestLogin } from "../services/login";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Dialog } from "../components/ui/dialog";
import NewAccount from "./register";
import Slides from "./components/slides";
import InputPassword from "./components/input_Password";

const LoginPage = () => {
  const { setToken } = useAuth();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [visibleInvalidCredentialAlert, setVisibleInvalidCredentialAlert] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isOpenDialog, setisOpenDialog] = useState<boolean>(false)
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    try {
      setIsLoading(true);
      const response = await RequestLogin({ setToken, email, password })
      if (response.ok) {
        setPassword("")
        setEmail("")
        router.push("/")
      } else {
        setVisibleInvalidCredentialAlert(true)
      }
    } catch (error) {
      toast.error("Erro ao se conectar com o servidor.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="sm:flex sm:h-screen  sm:bg-[url(/cars.png)] bg-cover bg-no-repeat sm:justify-center sm:items-center gap-8  ">
      <div className="sm:flex-1 h-screen flex items-center justify-center p-5 sm:p-0 ">
        <div
          className=" flex flex-col w-full justify-center h-screen sm:px-[20%]  sm:bg-gray-700 sm:bg-clip-padding sm:backdrop-filter sm:backdrop-blur-3xl sm:bg-opacity-10 "
        >
          <div className=" flex justify-center relative w-full h-[100px]">
            <Image src="/logo.png" alt="fullcar" fill />
          </div>
          <h1 className="text-4xl font-semibold py-5 text-muted-foreground">Login</h1>
          <span className="text-base font-semibold text-muted-foreground ">Bem-vindo de volta! Insira seus dados para fazer login</span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center py-5"
          >
            <div className="space-y-6 w-full">
              <Label className="flex flex-col gap-2">
                <span className="text-primary">
                  E-mail
                </span>
                <Input
                  type="text"
                  placeholder="e-mail"
                  className="placeholder:italic focus-visible:ring-1"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

              </Label>
              <Label className="flex flex-col gap-2 ">
                <span className="text-primary">Senha</span>
                <InputPassword
                  placeholder="senha"
                  value={password}
                  isSamePassword
                  setter={setPassword}

                />
                {visibleInvalidCredentialAlert && <span className="text-destructive">E-mail ou senha incorretos!</span>}
              </Label>

            </div>


            <Button
              size={"lg"}
              type="submit"
              className="w-full text-xl my-6 text-zinc-50"
              disabled={isLoading}
            >
              {isLoading ?
                (
                  <span className="flex items-center gap-2">
                    <Loader2 className=" animate-spin" />
                    Login
                  </span>
                )
                : "Login"}

            </Button>

          </form>
          <Button
            type="button"
            variant={"link"}
            className="w-full text-sm flex justify-center"
          >Esqueceu sua senha?</Button>

          <div className="  flex flex-col gap-10">
            <div className="flex items-center gap-5 justify-center">
              <div className="w-[40%] h-px bg-muted-foreground" />
              ou
              <div className="w-[40%] h-px bg-muted-foreground" />
            </div>
            <Dialog
              open={isOpenDialog}
              onOpenChange={setisOpenDialog}
            >
              <Button
                size={"lg"}
                variant={"outline"}
                className="w-full text-xl text-primary p-6 border-primary "
                onClick={() => setisOpenDialog(true)}
              >
                Cadastre-se
              </Button>
              <NewAccount />
            </Dialog>
          </div>
        </div >
      </div>
      <div className="flex-1 flex justify-center flex-col text-center ">
        <Slides />
      </div>

    </div>
  );
}

export default LoginPage;
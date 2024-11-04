"use client";
import { Button } from "@/app/base_ui/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/base_ui/ui/dialog";
import { Input } from "@/app/base_ui/ui/input";
import { Label } from "@/app/base_ui/ui/label";
import { toast } from "sonner";
import { createAccount } from "../services/NewAccount";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../validations/registerSchema";
import { z } from "zod";
import { ErrorCode } from "../errors/ErrorsEnum";
import { useState } from "react";
import { Loader2, User } from "lucide-react";
import { UseSession } from "../hooks/useSession";

type FormData = z.infer<typeof formSchema>;

const NewAccount = () => {
  const { login } = useAuth();
  const { userDetails } = UseSession();
  const [welcomeLoading, setWelcomeLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const user_name = data.first_name + " " + data.second_name;
      await createAccount({
        email: data.email,
        user_name,
        password: data.password,
      });
      setLoading(false);
      setWelcomeLoading(true);
      setTimeout(async () => {
        await login(data.email, data.password);
        setWelcomeLoading(false);
      }, 4000);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        error.message === ErrorCode.ACCOUNT_ALREADY_EXIST && toast("Este e-mail já está cadastrado.");
        error.message === ErrorCode.CONNECTION_API_ERROR && toast("Ops! Houve uma falha ao se conectar com o servidor, tente novamente mais tarde.");
      }
    }
  };


  return (
    <DialogContent className="w-[95%]">
      {!welcomeLoading ? <>
        <DialogHeader>
          <DialogTitle>Cadastre-se</DialogTitle>

        </DialogHeader>
        <DialogDescription asChild className="space-y-4">
          <div>
            <p className="text-justify">
              Ao se cadastrar você poderá anunciar seus veículos na plataforma
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              <Label className="w-full text-start space-y-2">
                <span className="text-start">Nome:</span>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="placeholder:italic focus-visible:ring-1"
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <p className="text-red-600">{errors.first_name.message}</p>
                )}
              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">Sobrenome:</span>
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  className="placeholder:italic focus-visible:ring-1"
                  {...register("second_name")}
                />
                {errors.second_name && (
                  <p className="text-red-600">{errors.second_name.message}</p>
                )}
              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">E-mail:</span>
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="placeholder:italic focus-visible:ring-1"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">Senha:</span>
                <Input
                  type="password"
                  placeholder="Senha"
                  className="placeholder:italic focus-visible:ring-1"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </Label>

              <Label className="w-full text-start space-y-2">
                <span className="text-start">Confirmação de senha:</span>
                <Input
                  type="password"
                  placeholder="Confirmação de senha"
                  className="placeholder:italic focus-visible:ring-1"
                  {...register("password_confirmation")}
                />
                {errors.password_confirmation && (
                  <p className="text-red-600">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </Label>

              <Button type="submit" className="text-zinc-50" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : "Cadastrar"}
              </Button>
            </form>
          </div>
        </DialogDescription>
      </> : <DialogDescription className="space-y-4">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Seja bem vindo!
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-md text-foreground text-balance w-full text-center">
            Aguarde enquanto estamos preparando seu novo cadastro. Em alguns segundos você será redirecionado para a página inicial
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Loader2 className="animate-spin" />
        </div>

      </DialogDescription>}
    </DialogContent>
  );
};

export default NewAccount;

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
import { fetchNewAccount } from "../services/NewAccount";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../validations/registerSchema";
import { z } from "zod";

type FormData = z.infer<typeof formSchema>;

const NewAccount = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });

  const onSubmit = async (data: FormData) => {
    try {
      const user_name = data.first_name + " " + data.second_name;
      const response = await fetchNewAccount({
        email: data.email,
        user_name,
        password: data.password,
      });
      if (response.ok) {
        await login(data.email, data.password);
      } else {
        const error = await response.json();
        toast.warning(error.message);
      }
    } catch (error: any) {
      toast.error("Erro: Falha na conexão com o servidor ");
    }
  };

  return (
    <DialogContent className="w-[95%]">
      <DialogHeader>
        <DialogTitle>Cadastre-se</DialogTitle>
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

              <Button type="submit">Cadastre-se</Button>
            </form>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default NewAccount;

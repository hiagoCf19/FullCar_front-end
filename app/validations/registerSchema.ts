import { z } from "zod";

export const formSchema = z
  .object({
    first_name: z.string().min(1, {
      message: "O nome é obrigatório",
    }),
    second_name: z.string().min(1, {
      message: "O sobrenome é obrigatório",
    }),
    email: z.string().email({
      message: "Formato de e-mail inválido",
    }),
    password: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres",
    }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "As senhas devem ser iguais!",
  });

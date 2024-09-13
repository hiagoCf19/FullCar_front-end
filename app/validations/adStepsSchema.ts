// Arquivo: adStepsSchema.ts

import { z } from "zod";

// Esquema do passo 1 (RegisterCar)
export const step1Schema = z.object({
  brand: z.string().refine((value) => value.trim() !== "", {
    message: "Por favor, selecione uma marca.",
  }),
  model: z.string().min(1, {
    message: "informe o modelo",
  }),
  model_year: z.string().min(1, {
    message: "informe o modelo",
  }),
  reference_month: z.string().min(1, {
    message: "informe o mês",
  }),
  gear_box: z.string().min(1, {
    message: "informe o tipo de câmbio",
  }),

  kilometers_driven: z.string().min(1, {
    message: "informe a kilometragem",
  }),
  traffic_signs: z.string().min(1, {
    message: "Informe a placa do veículo",
  }),
  type_of_direction: z.string().min(1, {
    message: "Informe o tipo de direção",
  }),
  engine_power: z.string().min(1, {
    message: "Informe a potência do motor",
  }),
  fuel: z.string().min(1, {
    message: "Informe o combustível",
  }),
  car_color: z.string().min(1, {
    message: "Informe a cor do veículo",
  }),
  type_of_vehicle: z.string().min(1, {
    message: "Informe o tipo de veículo",
  }),

  // year: z.number().min(1900, "O ano não pode ser anterior a 1900."),
  // fuel_type: z.string().min(1, "O tipo de combustível é obrigatório."),
  // transmission: z.string().
});

// Esquema do passo 2 (UserPriceAndAdInfo)
export const step2Schema = z.object({
  price: z.string().min(1, "O preço é obrigatório2"),
  title: z.string().min(1, {
    message: "informe o título do anuncio",
  }),
  description: z.string().min(1, "A descrição é obrigatória."),
});

// Esquema do passo 3 (UserAddImagesToAd)
export const step3Schema = z.object({
  imageMain: z
    .any()
    .refine((file) => file && file.length > 0, {
      message: "Arquivo de imagem é obrigatório.",
    })
    .refine(
      (file) => file && ["image/jpeg", "image/png"].includes(file[0]?.type),
      {
        message: "Apenas imagens JPEG ou PNG são permitidas.",
      }
    )
    .refine((file) => file && file[0]?.size <= 5 * 1024 * 1024, {
      message: "A imagem deve ser menor que 5MB.",
    }),
});

// Inferir os tipos para cada passo
export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;

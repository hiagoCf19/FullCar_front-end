import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/base_ui/ui/input";
import { Textarea } from "@/app/base_ui/ui/textarea";
import { Step2FormData } from "@/app/validations/adStepsSchema";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { ClientVehicle } from "../page";
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';

interface UserPriceAndAdInfoProps {
  register: UseFormRegister<Step2FormData>;
  errors: FieldErrors<Step2FormData>;
  clientVehicle: ClientVehicle | undefined;
  setValue: UseFormSetValue<Step2FormData>;

}

const UserPriceAndAdInfo = ({ register, errors, clientVehicle, setValue }: UserPriceAndAdInfoProps) => {
  const [price, setPrice] = useState('');

  const formatCurrency = (amount: any) => {
    let newValue = amount.replace(/\D/g, ''); // Remove tudo que não é dígito
    return (newValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const unformattedValue = inputValue.replace(/\D/g, ''); // Valor sem formatação
    const formattedValue = formatCurrency(inputValue); // Valor formatado

    setPrice(formattedValue); // Atualiza o estado local com o valor formatado
    // Atualiza o valor no registro do formulário com o valor não formatado
    register("price").onChange({ target: { value: unformattedValue } });
  };

  useEffect(() => {
    // Isso garante que o valor no registro do formulário seja atualizado
    setValue("price", price.replace(/\D/g, '')); // Define o valor sem formatação no react-hook-form
  }, [price, setValue]);

  return (
    <div className="w-full p-4 rounded-lg space-y-4">
      <h3 className="font-medium">Defina o preço</h3>
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-lg text-center">
          A tabela FIPE do seu {clientVehicle?.brand} {clientVehicle?.model} é
        </p>
        <p className="text-center font-medium text-lg text-primary">
          {clientVehicle?.fipe_price}
        </p>
        <span className="text-muted-foreground text-sm">
          Preço médio na Tabela FIPE em {clientVehicle?.reference_mounth}
        </span>
      </div>
      <div className="space-y-1">
        <Label className="text-sm">Defina seu preço</Label>
        <Input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder={`ex: ${clientVehicle?.fipe_price}`}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <h3 className="text-xl font-semibold">Insira mais informações para deixar seu anuncio completo</h3>
      <div className="space-y-1">
        <Label className="text-sm">Título</Label>
        <Input
          type="text"
          {...register("title")}
          placeholder="Insira o título que será exibido em seu anuncio"
        />
        {errors.title && (
          <span className="text-red-700 text-xs font-medium">
            {errors.title.message}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <Label className="text-sm">Descrição</Label>
        <Textarea
          className="focus:ring-1 h-40"
          placeholder="Descreva seu veículo"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-700 text-xs font-medium">
            {errors.description.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserPriceAndAdInfo;

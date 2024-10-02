import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/app/base_ui/ui/select";


interface Option {
  value: string;
  label: string;
}

interface ControlledSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({ name, control, options, placeholder, onValueChange, disabled }) => {
  return (
    <Controller
      disabled={disabled}
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          value={field.value}
          onValueChange={(value) => {
            field.onChange(value);
            if (onValueChange) {
              onValueChange(value); // Chama a função se fornecida
            }
          }}

        >
          <SelectTrigger className="w-full focus:ring-1">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default ControlledSelect;

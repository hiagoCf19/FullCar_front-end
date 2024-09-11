import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/app/components/ui/select";
import { Step1FormData } from '../validations/adStepsSchema';

interface Option {
  value: string;
  label: string;
}

interface ControlledSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({ name, control, options, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          value={field.value}
          onValueChange={(value) => field.onChange(value)}
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

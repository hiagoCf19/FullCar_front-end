"use client"
import { Input } from "@/app/base_ui/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
interface InputPasswordProps {
  value: string;
  placeholder: string;
  setter: Dispatch<SetStateAction<string>>;
  isSamePassword: boolean;
}
const InputPassword = ({ value, placeholder, setter, isSamePassword }: InputPasswordProps) => {
  const [visiblePassword, setVisiblePassword] = useState<Boolean>(false)

  return (
    <div className="flex items-center relative">
      <Input
        type={visiblePassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        className={`placeholder:italic focus-visible:ring-1 ${isSamePassword ? '' : 'border-destructive'}`}
        onChange={(e) => setter(e.target.value)}
        required

      />
      {visiblePassword ?
        <EyeIcon
          className="absolute right-0 m-2 text-primary" size={25}
          onClick={() => setVisiblePassword(!visiblePassword)}
        />
        : <EyeOffIcon
          className="absolute right-0 m-2 text-primary" size={25}
          onClick={() => setVisiblePassword(!visiblePassword)}
        />}
    </div>
  );
}

export default InputPassword;
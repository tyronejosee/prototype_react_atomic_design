import { InputHTMLAttributes } from "react";

type FormFieldProps = {
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormField = ({ label, name, ...props }: FormFieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-sm font-medium">
      {label}
    </label>
    <input
      id={name}
      name={name}
      className="border border-neutral-300 px-2 py-2 rounded-xl"
      {...props}
    />
  </div>
);

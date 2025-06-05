import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      "px-4 py-2 rounded-xl font-medium",
      variant === "primary"
        ? "bg-fuchsia-700 hover:bg-fuchsia-800 text-white"
        : "bg-gray-200 text-black",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

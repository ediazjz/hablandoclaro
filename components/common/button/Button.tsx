import { MouseEventHandler, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  id?: string;
  type: "button" | "submit" | "reset" | undefined;
  text?: string;
  icon?: ReactNode;
  variant:
    | "primary"
    | "primary-outlined"
    | "white"
    | "white-outlined"
    | "ghost";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  className,
  id,
  type,
  text,
  icon,
  variant,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={twMerge("btn", `btn-${variant}`, className)}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

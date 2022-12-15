import { ReactNode } from "react";

import Link from "next/link";

import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  id?: string;
  href: string;
  text?: string;
  icon?: ReactNode;
  variant:
    | "primary"
    | "primary-outlined"
    | "white"
    | "white-outlined"
    | "ghost";
}

export const ButtonLink = ({
  className,
  id,
  href,
  text,
  icon,
  variant,
}: Props) => {
  return (
    <Link
      href={href}
      className={twMerge("btn", `btn-${variant}`, className)}
      id={id}
    >
      {icon}
      {text && <span>{text}</span>}
    </Link>
  );
};

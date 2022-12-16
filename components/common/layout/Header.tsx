"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/sharp-solid-svg-icons";

import { ButtonLink } from "../button";
import { Category } from "./types";

interface Props {
  categories: Category[] | null;
}

export const Header = ({ categories }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex h-full w-full items-center justify-between border-zinc-700 px-4 pt-5 md:h-full md:px-6 xl:col-span-2 xl:row-[span_10_/_span_10] xl:flex-col xl:border-r-2 xl:py-12">
      <h1 className="logo w-1/3 xl:mb-16 xl:w-full">Hablando claro.</h1>

      <div className="flex w-1/2 items-center xl:w-full xl:flex-1 xl:flex-col xl:items-start xl:justify-between">
        <ButtonLink
          href="/subscribe"
          text="Subscribe"
          variant="primary"
          className="ml-auto mr-8 w-fit xl:order-2 xl:mx-0 xl:w-full"
        />

        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          className="h-7 w-7 cursor-pointer text-zinc-100 md:h-8 md:w-8 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <ul
          className={`h6 absolute top-[calc(100%_+_1rem)] z-50 h-fit w-[60%] space-y-6 border-l-2 border-b-2 border-zinc-700 bg-zinc-900 p-6 text-right transition-all duration-300 ease-in-out sm:w-1/2 md:w-1/3 xl:static xl:order-1 xl:mb-32 xl:w-full xl:space-y-8 xl:border-transparent xl:px-0 xl:text-left ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`border-b-2 transition-all duration-300 ease-linear hover:bg-zinc-500  ${
                pathname === "/" ? "border-zinc-100" : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>

          {categories?.map((category) => (
            <li key={category.slug}>
              <Link
                href={category.slug}
                className={`border-b-2 transition-all duration-300 ease-linear hover:bg-zinc-500  ${
                  pathname?.includes(category.slug)
                    ? "border-zinc-100"
                    : "border-transparent"
                }`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

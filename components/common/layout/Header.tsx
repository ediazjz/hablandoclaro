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
    <header className="relative flex h-full w-full items-center justify-between border-zinc-700 px-4 pt-5 md:h-full md:px-6 lg:col-span-2 lg:row-[span_10_/_span_10] lg:flex-col lg:border-r-2 lg:py-12">
      <h1 className="logo w-1/3 lg:mb-16 lg:w-full">Hablando claro.</h1>

      <div className="flex w-1/2 items-center lg:w-full lg:flex-1 lg:flex-col lg:items-start lg:justify-between">
        <ButtonLink
          href="/subscribe"
          text="Subscribe"
          variant="primary"
          className="ml-auto mr-8 w-fit lg:order-2 lg:mx-0 lg:w-full"
        />

        <FontAwesomeIcon
          icon={isOpen ? faClose : faBars}
          className="h-7 w-7 cursor-pointer text-zinc-100 md:h-8 md:w-8 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <ul
          className={`h6 absolute top-[calc(100%_+_1rem)] z-50 h-fit w-[60%] space-y-6 border-l-2 border-b-2 border-zinc-700 bg-zinc-900 p-6 text-right transition-all duration-300 ease-in-out sm:w-1/2 md:w-1/3 lg:static lg:order-1 lg:mb-32 lg:w-full lg:space-y-8 lg:border-transparent lg:px-0 lg:text-left ${
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

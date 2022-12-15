"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/pro-regular-svg-icons";

import { ButtonLink } from "../button";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-fit w-full items-center justify-between p-6 pb-4 lg:col-span-2 lg:row-[span_10_/_span_10] lg:h-full lg:flex-col lg:py-12">
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
          className="h-8 w-8 cursor-pointer text-zinc-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <ul
          className={`h5 absolute top-[6.3rem] h-fit w-[60%] space-y-6 border-l-2 border-b-2 border-zinc-700 bg-zinc-900 p-6 text-right transition-all duration-300 ease-in-out sm:w-1/2 md:w-1/3 lg:static lg:order-1 lg:mb-32 lg:w-full lg:space-y-8 lg:border-transparent lg:px-0 lg:text-left ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`border-b-2 ${
                pathname === "/" ? "border-zinc-100" : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>

          {/* Refactor from here on to fetch categories from database */}
          <li>
            <Link
              href="/programming"
              className={`border-b-2 ${
                pathname === "/programming"
                  ? "border-zinc-100"
                  : "border-transparent"
              }`}
            >
              Programming
            </Link>
          </li>
          <li>
            <Link
              href="/design"
              className={`border-b-2 ${
                pathname === "/design"
                  ? "border-zinc-100"
                  : "border-transparent"
              }`}
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              href="/philosophy"
              className={`border-b-2 ${
                pathname === "/philosophy"
                  ? "border-zinc-100"
                  : "border-transparent"
              }`}
            >
              Philosophy
            </Link>
          </li>
          <li>
            <Link
              href="/life"
              className={`border-b-2 ${
                pathname === "/life" ? "border-zinc-100" : "border-transparent"
              }`}
            >
              Life
            </Link>
          </li>
          <li>
            <Link
              href="/books"
              className={`border-b-2 ${
                pathname === "/books" ? "border-zinc-100" : "border-transparent"
              }`}
            >
              Books
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

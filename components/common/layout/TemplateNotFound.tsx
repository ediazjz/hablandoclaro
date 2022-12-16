import { ReactNode } from "react";

import { Header } from "./Header";
import { Category } from "./types";

interface Props {
  children: ReactNode;
  categories: Category[] | null;
}

export const TemplateNotFound = ({ children, categories }: Props) => {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-[repeat(10,_minmax(0,_1fr))] gap-4 overflow-hidden xl:grid-cols-12 ">
      <Header categories={categories} />

      <div className="row-[span_9_/_span_9] flex h-full w-full flex-col items-center justify-center border-t-2 border-zinc-700 py-6 px-4 md:py-8 md:px-6 xl:col-span-10 xl:row-[span_10_/_span_10] xl:border-t-0 xl:py-10 xl:pr-8 xl:pl-4 2xl:pr-12 2xl:pl-6">
        {children}
      </div>
    </div>
  );
};

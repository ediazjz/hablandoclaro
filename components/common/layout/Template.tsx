import { ReactNode } from "react";

import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Template = ({ children }: Props) => {
  return (
    <div className="relative grid h-screen w-screen grid-cols-1 grid-rows-[repeat(10,_minmax(0,_1fr))] gap-4 overflow-hidden lg:grid-cols-12 ">
      <Header />

      <div className="row-[span_9_/_span_9] h-full w-full overflow-y-auto border-t-2 border-zinc-700 bg-blue-900 lg:col-span-10 lg:row-[span_10_/_span_10] lg:border-t-0 lg:border-l-2">
        {children}
      </div>
    </div>
  );
};

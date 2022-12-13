import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Template = ({ children }: Props) => {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-[repeat(10,_minmax(0,_1fr))] gap-4 lg:grid-cols-12 ">
      <header className="flex h-full w-full justify-between lg:col-span-2 lg:row-[span_10_/_span_10]">
        <h1 className="logo block w-1/3">Hablando claro.</h1>

        <div className="w-1/2">Sign up</div>
      </header>

      <div className="row-[span_9_/_span_9] h-full w-full overflow-y-auto bg-blue-900 lg:col-span-10 lg:row-[span_10_/_span_10]">
        {children}
      </div>
    </div>
  );
};

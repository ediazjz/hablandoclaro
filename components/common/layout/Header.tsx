import { ButtonLink } from "../button";

export const Header = () => {
  return (
    <header className="flex h-fit w-full items-center justify-between p-4 pt-6 lg:col-span-2 lg:row-[span_10_/_span_10]">
      <h1 className="logo w-1/3">Hablando claro.</h1>

      <div className="w-1/2">
        <ButtonLink href="sign-up" id="hola" text="Sign up" variant="primary" />
      </div>
    </header>
  );
};

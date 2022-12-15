import { ButtonLink } from "../button";

export const Header = () => {
  return (
    <header className="flex h-full w-full items-center justify-between p-4 lg:col-span-2 lg:row-[span_10_/_span_10]">
      <h1 className="logo mt-4 block w-1/3">Hablando claro.</h1>

      <div className="w-1/2">
        <ButtonLink
          href="sign-up"
          id="hola"
          text="Sign up"
          variant="primary-outlined"
        />
      </div>
    </header>
  );
};

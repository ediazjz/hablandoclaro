import { Nunito, Josefin_Sans } from "@next/font/google";
import "./globals.css";

// Font declaration
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${nunito.variable} ${josefin.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}

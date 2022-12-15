import { Ubuntu, Josefin_Sans } from "@next/font/google";
import "./globals.css";

// Font declaration
const ubuntu = Ubuntu({
  weight: ["300", "500"],
  variable: "--font-ubuntu",
});
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
    <html lang="es" className={`${ubuntu.variable} ${josefin.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}

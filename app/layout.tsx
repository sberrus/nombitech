import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google"
// import localFont from "next/font/local"; // using this to import fonts reachable in /public
import "./globals.css";

// import font
const SCPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "NombiTech",
  description: "<insert description>", // TODO: Insertar descripción
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`dark ${SCPro.className}`} >
      <body
        className="dark:bg-neutral-900 text-gray-200"
      >
        {children}
      </body>
    </html>
  );
}

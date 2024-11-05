import type { Metadata } from "next";
// import localFont from "next/font/local"; // using this to import fonts reachable in /public
import "./globals.css";

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
    <html lang="en" className="dark">
      <body
        className="dark:bg-gray-950 text-gray-200"
      >
        {children}
      </body>
    </html>
  );
}

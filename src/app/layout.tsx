import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

// Components
import NavBar from "../components/navbar";

export const metadata: Metadata = {
  title: "Emma Lu Photography",
  description: "Dreamy portrait photographer, based in Seattle",
};

const mont = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Prata&family=Sanchez:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${mont.variable} flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}

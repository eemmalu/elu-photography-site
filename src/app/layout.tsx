import type { Metadata } from "next";
import "./globals.css";
import { Inria_Serif, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Emma Lu Photography",
  description: "Dreamy portrait photographer, based in Seattle",
};

const inria = Inria_Serif({
  variable: "--font-serif", // This defines the CSS variable
  subsets: ["latin"],
  weight: "400",
});

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
          href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inria.variable} ${mont.variable}`}>{children}</body>
    </html>
  );
}

"use client";
import Link from "next/link";

type ButtonProps = {
  label: string;
  linkTo: string;
  className?: string;
};

export default function Button({ label, linkTo, className = "" }: ButtonProps) {
  return (
    <Link href={`/${linkTo}`}>
      <button
        className={`font-sans italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 ${className}`}
      >
        {label}
      </button>
    </Link>
  );
}

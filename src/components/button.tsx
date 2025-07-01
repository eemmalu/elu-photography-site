"use client";
import Link from "next/link";

type ButtonProps = {
  label: string;
  linkTo?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  linkTo = undefined,
  className = "",
  onClick = undefined,
}: ButtonProps) {
  if (linkTo && onClick) {
    return (
      <Link href={`/${linkTo}`}>
        <button
          onClick={onClick}
          className={`font-sans italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 w-fit ${className}`}
        >
          {label}
        </button>
      </Link>
    );
  } else if (linkTo) {
    return (
      <Link href={`/${linkTo}`}>
        <button
          className={`font-sans italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 w-fit ${className}`}
        >
          {label}
        </button>
      </Link>
    );
  } else if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`font-sans italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 w-fit ${className}`}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className={`font-sans italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 w-fit ${className}`}
      >
        {label}
      </button>
    );
  }
}

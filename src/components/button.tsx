"use client";

type ButtonProps = {
    label: string;
    onClickAction: () => void;
    className?: string;
}

export default function Button({ label, onClickAction, className = ""}: ButtonProps) {
    return (
        <button onClick={onClickAction} className={`font-serif italic py-2 px-8 bg1 bg-primary rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-110 ${className}`}>
            {label}
        </button>
    );
}
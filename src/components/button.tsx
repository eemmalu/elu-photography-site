"use client";

type ButtonProps = {
    label: string;
    onClickAction: () => void;
    className?: string;
}

export default function Button({ label, onClickAction, className = ""}: ButtonProps) {
    return (
        <button onClick={onClickAction} className={`py-2 px-8 bg1 bg-primary rounded-md ${className}`}>
            {label}
        </button>
    );
}
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  padding?: string;
  margin?: string;
};

const variantStyles: Record<"primary" | "secondary" | "danger", string> = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white border-transparent",
  secondary: "bg-purple-500 hover:bg-purple-600 text-white border-transparent",
  danger: "bg-red-500 hover:bg-red-600 text-white border-transparent",
};

export function Button({
  children,
  onClick,
  variant = "primary",
  padding = "px-4 py-4",
  margin = "m-4",
}: ButtonProps) {
  const buttonClass = `${variantStyles[variant]} ${padding} ${margin}`;

  return (
    <button
      onClick={onClick}
      className={`relative inline-block font-medium text-lg leading-tight transition-colors duration-300 ease-in-out border rounded-xl ${buttonClass}`}
    >
      <span className="relative z-10 block px-7 py-4 overflow-hidden font-medium leading-tight">
        <span className="absolute inset-0 w-full h-full rounded-xl bg-opacity-50" />
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-opacity-40" />
        <span className="relative">{children}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-opacity-40"
        data-rounded="rounded-xl"
      />
    </button>
  );
}

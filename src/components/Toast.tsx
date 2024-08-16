import { useEffect, useState } from "react";

export type ToastProps = {
  message: string;
  id: number;
  variant?: "default" | "success" | "error";
  onClose(): void;
  duration?: number;
};

const variantsBackground: Record<NonNullable<ToastProps["variant"]>, string> = {
  default: "bg-gray-400",
  success: "bg-teal-400",
  error: "bg-red-400",
};

const toastAnimations = {
  enter: "opacity-0 translate-y-4",
  enterActive:
    "transition-transform transition-opacity duration-300 opacity-100 translate-y-0",
  exit: "opacity-100 translate-y-0",
  exitActive:
    "transition-transform transition-opacity duration-300 opacity-0 translate-y-4",
};

export function Toast({
  message,
  variant = "default",
  onClose,
  duration = 5000,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center space-x-2 ${
        isVisible ? toastAnimations.enterActive : toastAnimations.exitActive
      }`}
    >
      <div
        className={`text-sm text-white rounded-xl shadow-lg ${variantsBackground[variant]} p-4 flex items-center space-x-2`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          type="button"
          className="ml-2 text-white hover:text-gray-200"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

import React, { createContext, useContext, useState } from 'react';
import { Toast } from '../Toast';

type ToastContextType = {
    toasts: { id: number; message: string; variant: 'default' | 'success' | 'error'; duration: number }[];
    addToast: (message: string, variant?: 'default' | 'success' | 'error', duration?: number) => void;
    dismissAll: () => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<{ id: number; message: string; variant: 'default' | 'success' | 'error'; duration: number }[]>([]);

    const addToast = (message: string, variant: 'default' | 'success' | 'error' = 'default', duration: number = 5000) => {
        const id = Date.now();
        setToasts([...toasts, { id, message, variant, duration }]);
    };

    const dismissAll = () => {
        setToasts([]);
    };

    const handleClose = (id: number) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, dismissAll }}>
            {children}
            <div className="fixed bottom-0 right-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs">
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                        onClose={() => handleClose(toast.id)}
                        duration={toast.duration}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

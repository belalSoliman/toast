import { Toast } from './Toast';
import { useToast } from './context/ToastContext';

export function ToastContainer() {
    const { toasts } = useToast();

    return (
        <div className="fixed bottom-0 right-0 p-4 space-y-2 max-w-xs pointer-events-none flex flex-col gap-4">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    variant={toast.variant}
                    onClose={() => {}}
                    duration={toast.duration}
                />
            ))}
        </div>
    );
}

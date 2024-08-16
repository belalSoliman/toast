import { Button } from './Button';
import { useToast } from './context/ToastContext';

export function ToastButtons() {
    const { addToast, dismissAll } = useToast();

    return (
        <div className="space-y-4">
            <Button onClick={() => addToast('This is a default toast')} variant="primary">Show Default Toast</Button>
            <Button onClick={() => addToast('This is a success toast', 'success')} variant="secondary">Show Success Toast</Button>
            <Button onClick={() => addToast('This is an error toast', 'error')} variant="danger">Show Error Toast</Button>
            <Button onClick={() => addToast('This is a warning toast', 'default', 3000)} variant="primary">Show Warning Toast (3s)</Button>
            <Button onClick={() => addToast('This is an info toast', 'success', 5000)} variant="secondary">Show Info Toast (5s)</Button>
            <Button onClick={() => addToast('This is a notification toast', 'error', 7000)} variant="danger">Show Notification Toast (7s)</Button>

            <Button onClick={() => dismissAll()} variant="danger">Dismiss All Toasts</Button>
        </div>
    );
}

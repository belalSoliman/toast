import ReactDOM from 'react-dom';
import { ToastProvider } from './components/context/ToastContext'
import { ToastButtons } from './components/ToastButtons';

export default function App() {
    return (
        <ToastProvider>
            <ToastButtons />
        </ToastProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

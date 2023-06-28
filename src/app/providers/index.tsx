import { BrowserRouter } from 'react-router-dom';
import RouterProvider from './RouterProvider';

export function App() {
    return (
        <BrowserRouter>
            <RouterProvider />
        </BrowserRouter>
    );
}

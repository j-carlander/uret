import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login.jsx';
import { Register } from './pages/Register.jsx';
import { Home } from './pages/Home.jsx';

export const pages = [
  { path: "/", element: <Home />},
  { path: "/logga-in", element: <Login /> },
  { path: "/registrera", element: <Register /> },
];



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

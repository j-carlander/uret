import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/login.jsx";
import { Register } from "./pages/Register.jsx";
import { Home } from "./pages/Home.jsx";
import { getCurrentUser } from "./utils/currentUser.js";

export const pages = [{ path: "/", element: <Home /> }];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
    loader: () => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        return redirect("/logga-in");
      }
      return null;
    },
  },
  {
    path: "/logga-in",
    element: <Login />,
    loader: () => {
      const currentUser = getCurrentUser();
      if (currentUser) {
        return redirect("/");
      }
      return null;
    },
  },
  { path: "/registrera", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

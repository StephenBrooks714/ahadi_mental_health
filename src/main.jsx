import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./Contact.jsx";
import "./styles/main.css"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <AboutUs/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/services",
        element: <Services/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
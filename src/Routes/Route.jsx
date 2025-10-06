import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout
    }
])
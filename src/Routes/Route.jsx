import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import BookDetails from "../Pages/BookDetails";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                // loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: '/home',
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            },

        ]
    }
])
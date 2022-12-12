import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup/Signup";
import Success from "../components/Success/Success";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/success',
                element: <Success></Success>
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import Dashboard from "./views/Dashboard";
import { Navigate } from "react-router-dom";


const router = createBrowserRouter([


    {
        path: '/',
        element: <DefaultLayout></DefaultLayout>,
        children: [

            {
                path: '/',
                element: <Navigate to= "/users"></Navigate>
            },

            {
                path: '/users',
                element: <Users></Users>
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },

    {
        path: '/',
        element: <GuestLayout></GuestLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
        
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },

    {
        path: '*',
        element: <NotFound></NotFound>
    },

])

export default router;
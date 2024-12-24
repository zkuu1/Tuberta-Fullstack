
import { Outlet } from "react-router-dom"
import { useStateContext } from "../Context/ContextProvider"
import { Navigate } from "react-router-dom";


export default function GuestLayout () {

const {token} = useStateContext()
if (token) {
    return <Navigate to = "/"></Navigate>
}

    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    )
}
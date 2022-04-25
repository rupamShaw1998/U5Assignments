import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext"

export const ProtectedRoute = () => {
    const {isAuth} = useContext(LoginContext);

    if(!isAuth)
        return <Navigate to="/login"></Navigate>
}
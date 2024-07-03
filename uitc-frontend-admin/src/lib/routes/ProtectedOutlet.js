import { Navigate, Outlet } from "react-router";
import { isAuth } from "../services/auth.service";

const ProtectedOutlet = () => {
    const auth = isAuth();
    return auth 
            ? <Outlet />
            : <Navigate to="/login" replace/>
}

export default ProtectedOutlet;
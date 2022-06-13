import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"


function RequireAuth() {
    const location=useLocation();
    const {token}=useSelector(store=>store.auth);
    return token?<Outlet/>:<Navigate to="/login" state={{from:location.pathname}} replace></Navigate>
}

export  {RequireAuth}

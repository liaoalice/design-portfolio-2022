import { Outlet } from "react-router-dom";
import Password from "./Components/Password";

const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Password />;
};

export default ProtectedRoutes;
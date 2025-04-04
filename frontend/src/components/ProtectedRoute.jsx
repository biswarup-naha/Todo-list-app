import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextApi";
import Loading from "./Loading";

const ProtectedRoute = ({ element }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <Loading />
    }

    // If not authenticated, redirect to login with return URL
    if (!user) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    // If all checks pass, render the protected component
    return element;
};

export default ProtectedRoute;

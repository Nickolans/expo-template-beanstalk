import React from "react";
import { useLocation, Navigate } from "react-router-native";
import { authService } from "../Services/auth.service";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const { userValue } = authService;
  if (!userValue)
    return <Navigate to="/getstarted" state={{ from: location }} replace />;

  return children;
};

export default RequireAuth;

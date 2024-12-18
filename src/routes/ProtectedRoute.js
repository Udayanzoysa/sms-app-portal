import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token.isReady || !token.accessToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

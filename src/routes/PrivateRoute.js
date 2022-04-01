import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { userState } = useAuthContext();
  let location = useLocation();

  if (userState._id) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

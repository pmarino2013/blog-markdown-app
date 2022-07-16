import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRotes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRotes;

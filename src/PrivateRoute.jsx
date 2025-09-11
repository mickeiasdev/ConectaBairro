import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";

const PublicRoute = (props) => {
  const { user } = useAuthContext();
  const location = useLocation();
  return !user ? (
    props.children
  ) : (
    <Navigate
      to="/"
      state={{
        from: location.pathname,
      }}
    />
  );
};

export default PublicRoute;

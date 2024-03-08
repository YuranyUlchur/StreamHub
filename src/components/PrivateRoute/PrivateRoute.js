import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";

function getUser() {
  return localStorage.getItem('user');
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [userString] = useState(getUser());
  const user = JSON.parse(userString || "{}");
  const logeado = !!user.user;

  return logeado ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

// Define PropTypes for PrivateRoute component
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

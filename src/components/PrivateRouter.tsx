import { useContext } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const PrivateRoutes = () => {
  const {users} = useContext(CartContext)
  return users ? <Outlet /> : <Navigate to="/log-in" replace />;
};

export default PrivateRoutes;

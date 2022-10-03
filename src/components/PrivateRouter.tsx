import { Outlet, Navigate, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem("USER") || "");
  return user.account ? <Outlet /> : <Navigate to="/log-in" replace />;
};

export default PrivateRoutes;

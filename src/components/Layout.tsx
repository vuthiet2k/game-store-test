import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box sx = {{margin:0}}>
      <Header />
      <Outlet  />
      <Footer />
    </Box>
  );
};

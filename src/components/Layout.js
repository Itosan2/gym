import React from "react";
import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "../pages/Home";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;

import React from "react";
import HowToDrawer from "./HowToDrawer";
import { Container } from "@mui/material";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        position: "sticky",
        top: "0",
        overflow: "hidden",
        height: "60px",
        zIndex: 1,
        backgroundColor: "#fff",
      }}
    >
      <img src={logo} alt="logo" />
      <HowToDrawer />
    </Container>
  );
};

export default NavBar;

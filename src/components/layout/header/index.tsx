import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

import Navigation from "./components/Navigation";
//  import StarWarsLogo from "../../../assets/StarWarsLogo.svg";

const HeaderContainer = styled("header")({
  color: "#fff",
  backgroundColor: "#ff1f48",
  width: "100%",
  textAlign: "center",
  padding: "10px 0",
  margin: 0,
});

const AppTitle = styled(Typography)({
  fontSize: "18px",
  lineHeight: "1",
  marginBottom: "15px",
});

const Header = () => {
  return (
    <HeaderContainer>
      <AppTitle>Star Wars App</AppTitle>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;

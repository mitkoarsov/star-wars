import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const FooterContainer = styled("footer")({
  backgroundColor: "#ff1f48",
  position: "absolute",
  bottom: 0,
  width: "100%",
  textAlign: "center",
});

const FooterText = styled(Typography)({
  color: "#fff",
  padding: "5px 0",
  fontSize: "10px",
});

const AppAuthor = styled("a")({
  color: "#00126b",
  textDecoration: "none",
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        This app is made with Create React App using TypeScript by
        <AppAuthor href="https://github.com/mitkoarsov/">
          {"  Mitko Arsov"}
        </AppAuthor>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

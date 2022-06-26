import React from "react";
import { styled } from "@mui/system";

import Header from "./header";
import Footer from "./footer";

type ContainerProps = {
  children: JSX.Element;
};

const MainContent = styled("main")({
  marginTop: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Container;

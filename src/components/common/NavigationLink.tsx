import React from "react";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  name: string;
  url: string;
};

const NavItem = styled(NavLink)({
  color: "#ff1f48",
  padding: "5px",
  margin: "0 5px",
  fontSize: "15px",
  textDecoration: "none",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#fff",
  },
});

const NavigationLink = ({ name, url }: NavigationLinkProps) => {
  return (
    <NavItem
      to={url}
      style={({ isActive }) => ({
        background: isActive ? "#fff" : "#ffffffB3",
      })}
    >
      {name}
    </NavItem>
  );
};

export default NavigationLink;

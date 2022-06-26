import React from "react";

import { NavLink } from "react-router-dom";
import NavigationLink from "../../../common/NavigationLink";

const routes = [
  { name: "Home", url: "/" },
  { name: "Compare", url: "/compare-planets" },
];

const Navigation = () => {
  return (
    <nav>
      {routes.map(({ name, url }) => (
        <NavigationLink key={name} url={url} name={name} />
      ))}
    </nav>
  );
};

export default Navigation;

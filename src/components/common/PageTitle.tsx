import React from "react";

import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)({
  color: "#00126b",
  fontSize: "18px",
  marginBottom: "18px",
});

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return <Title>{title}</Title>;
};

export default PageTitle;

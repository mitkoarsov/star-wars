import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";

export const SearchContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginBottom: "50px",
});

export const SearchInput = styled(TextField)({
  width: "350px",
  div: {
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "0px",
  },
  label: {
    paddingLeft: "5px",
  },
  input: {
    height: "30px",
    padding: "10px",
    paddingLeft: "20px",
  },
});

export const SearchBtn = styled(Button)({
  width: "100px",
  backgroundColor: "#ff1f48",
  color: "#fff",
  borderTopLeftRadius: "0px",
  borderTopRightRadius: "25px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "25px",
  "&:hover": {
    backgroundColor: "#ff1f48cc",
  },
});

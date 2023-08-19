import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  InputAdornment,
  IconButton,
  createTheme,
  useMediaQuery,
} from "@mui/material";
// import { useId } from "react";

export default function Search() {
  // const id = useId();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 720,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TextField
      placeholder="Search ..."
      type="search"
      id=":R19l9cq:"
      // id={id}
      sx={{
        "& .css-aeeyth-MuiInputBase-input-MuiOutlinedInput-input": {
          color: "#DEDEDE",
        },
        width: isMatch ? "225px" : "320px",
        maxWidth: "320px",
        borderRadius: "100px",
        backgroundColor: "rgba(211, 211, 211, 0.26)",
        border: "none",
        "& fieldset": { border: "none" },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon sx={{ fill: "#D3D2D2" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

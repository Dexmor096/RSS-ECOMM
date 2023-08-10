import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";

export default function Search() {
  return (
    <TextField
      placeholder="Search ..."
      type="search"
      sx={{
        "& .css-aeeyth-MuiInputBase-input-MuiOutlinedInput-input": {
          color: "#DEDEDE",
        },
        width: "320px",
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

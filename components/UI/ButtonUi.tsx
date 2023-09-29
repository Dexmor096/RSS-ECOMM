import { Button } from "@mui/material";
import { ButtonMain } from "types";
import { montserrat } from "components/stylesSX";

function ButtonUi(props: ButtonMain) {
  return (
    <Button
      variant="outlined"
      className={montserrat.className}
      sx={{
        display: "flex",
        fontWeight: "600",
        p: "18px 40px",
        borderRadius: 0,
        transition: "all 0.3s ease",
        "&:hover": {
          border: props.border,
          p: "18px 40px",
          boxShadow: "4px 7px 10px 0px rgba(255, 255, 255, 0.15)",
          transform: "scale(1.05)",
        },
        ...props,
      }}
    >
      {props.text}
    </Button>
  );
}

export default ButtonUi;

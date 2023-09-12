import { Typography } from "@mui/material";
import { Advent_Pro } from "next/font/google";
import { SectionTitleStyles } from "types";

export const advent = Advent_Pro({
  weight: ["400", "500"],
  subsets: ["latin"],
});

function SectionTitle(props: SectionTitleStyles) {
  return (
    <Typography
      className={advent.className}
      fontSize={60}
      letterSpacing={1.2}
      lineHeight={1.05}
      {...props}
    >
      {props.title}
    </Typography>
  );
}

export default SectionTitle;

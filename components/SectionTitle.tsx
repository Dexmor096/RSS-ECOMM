import { Typography } from "@mui/material";
import { Advent_Pro } from "next/font/google";

export const advent = Advent_Pro({
  weight: ["400", "500"],
  subsets: ["latin"],
});

function SectionTitle({ title, color }: { title: string; color: string }) {
  return (
    <Typography
      mt="115px"
      className={advent.className}
      fontSize={55}
      letterSpacing={1.2}
      color={color}
      width={950}
      lineHeight={1.05}
    >
      {title}
    </Typography>
  );
}

export default SectionTitle;

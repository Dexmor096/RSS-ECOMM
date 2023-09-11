import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const IconSX = {
  transition: "all 0.25s ease",
  padding: "5px",
  borderRadius: "5px",
  "&:hover": { backgroundColor: "rgba(211, 211, 211, 0.15)" },
};

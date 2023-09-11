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

export const buttonDownSX = {
  background: "#fff",
  color: "#000",
  p: "15px 24px",
  alignItems: "center",
  gap: "10px",
  transition: "all 0.5s ease",
};

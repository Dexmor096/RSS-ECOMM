import React from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { InfoCardProps } from "../types";

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, info }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Image src={icon} alt="icon" width={62} height={62}></Image>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 16,
            paddingLeft: "5px",
            letterSpacing: "1px",
          }}
        >
          {title}
        </Typography>
      </Box>
      <div>{info}</div>
    </Box>
  );
};

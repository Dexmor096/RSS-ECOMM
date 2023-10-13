"use client";
import React from "react";
import { Typography, Button } from "@mui/material";
import { SmallCardProps } from "../../types";
import Image from "next/image";

export const SmallCard: React.FC<SmallCardProps> = ({ title, icon }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#ffffff",
        padding: "15px",
        color: "black",
        textTransform: "none",
        width: "100%",
        "&:hover": {
          backgroundColor: "#e5e5e5",
          boxShadow: "none",
        },
      }}
    >
      <Image src={icon} alt="icon" width={62} height={62}></Image>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 15,
          paddingLeft: "5px",
          letterSpacing: "1px",
          textAlign: "start",
          marginLeft: "4px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

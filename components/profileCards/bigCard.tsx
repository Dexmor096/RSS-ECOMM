import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import Image from "next/image";
import { BigCardProps } from "../../types";
import { styled } from "@mui/system";

const Item = styled(Paper)(() => ({
  textAlign: "start",
  minHeight: "166px",
  lineHeight: "30px",
  padding: 30,
  boxSizing: "content-box",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const BigCard: React.FC<BigCardProps> = ({ title, icon, info }) => {
  return (
    <Item elevation={0}>
      <Box display="flex" alignItems="center" gap="4px">
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
    </Item>
  );
};

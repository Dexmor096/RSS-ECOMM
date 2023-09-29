import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { InfoCardProps } from "../types";

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, info }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
      </div>
      <div>{info}</div>
    </div>
  );
};

//               <Typography sx={{ display: "flex", alignItems: "center" }}>
//                 <AccountCircleOutlinedIcon
//                   aria-label="avatar"
//                   color="primary"
//                   sx={{
//                     width: 62,
//                     height: 62,
//                     verticalAlign: "middle",
//                     display: "inline-block",
//                   }}
//                 ></AccountCircleOutlinedIcon>
//                 <Typography
//                   sx={{ fontWeight: "bold", fontSize: 14, paddingLeft: "5px" }}
//                 >
//                   {myInfo?.firstname} {myInfo?.lastname}
//                 </Typography>
//               </Typography>
//               <Typography>
//                 <span style={{ color: "#969696" }}>E-mail: </span>
//                 {myInfo?.email}
//               </Typography>
//               <div style={{ alignSelf: "end" }}>
//                 <Button>
//                   <EditIcon></EditIcon>
//                 </Button>
//                 <Button
//                   size="medium"
//                   variant="text"
//                   sx={{
//                     textTransform: "capitalize",
//                     textDecoration: "underline",
//                   }}
//                 >
//                   Выйти
//                 </Button>
//               </div>
//             </Item>

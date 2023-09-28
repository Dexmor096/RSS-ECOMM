import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import favoritesIcon from "../public/assets/icons/favorites.svg";
import { InfoCardProps } from "../types";

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, info }) => {
  return (
    <>
      <div>
        <Image src={icon} alt="" width={62} height={62}></Image>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 14, paddingLeft: "5px" }}
        >
          {/*{индивидуальная информация для конкретной карточки}*/}
        </Typography>
      </div>
      <div>{info}</div>
    </>
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

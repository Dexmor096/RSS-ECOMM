import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  "Sale",
  "Mountain",
  "Road",
  "Active",
  "Kids",
  "city",
  "Accessories",
];

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          color: "#fff",
          padding: "5px",
          "& svg": {
            height: "35px",
            width: "35px",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
        sx={{
          "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#141618",
          },
        }}
      >
        <Box width="280px">
          <List>
            {pages.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText
                    sx={{ color: "#fff", "& span": { fontWeight: "700" } }}
                  >
                    {page.toUpperCase()}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

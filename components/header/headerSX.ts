export const headerLinkSX = {
  color: "#fff",
  opacity: "1",
  letterSpacing: "0.84px",
  transition: "all 0.25s ease",
  textDecoration: "none",
  borderBottom: "2px solid transparent",
  "&:hover": { borderBottom: "2px solid #006AD5", transform: "scaleX(1.05)" },
};

export const tabsHeader = {
  padding: "8px 0",
  textTransform: "uppercase",
  direction: "row",
  display: "flex",
  justifyContent: "space-evenly",
  "& .css-heg063-MuiTabs-flexContainer": {
    justifyContent: "space-evenly",
  },
  "& .css-1751eci-MuiButtonBase-root-MuiTab-root": {
    padding: "13px 16px",
    minHeight: "37px",
    minWidth: "70px",
    fontSize: "19px",
  },
};

export const stackSX = {
  direction: "row",
  padding: "18px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(255, 255, 255, 0.40)",
};

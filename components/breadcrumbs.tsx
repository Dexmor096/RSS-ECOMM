import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function CustomBreadcrumbs() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="primary"
      sx={{ display: "flex", alignItems: "center" }}
      href="/"
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    </Link>,
    <Typography key="2" color="primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function CustomBreadcrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="primary" href="/">
      MUI
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

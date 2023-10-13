"use client";
import { Skeleton, Box } from "@mui/material";
export default function CardSkeleton() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        display="flex"
        alignItems="center"
        gap="6px"
        sx={{ marginBottom: "15px" }}
      >
        <Skeleton
          variant="circular"
          animation="wave"
          width="62px"
          height="62px"
        />
        <Skeleton variant="text" animation="wave" width="150px" height="30px" />
      </Box>
      <Skeleton
        variant="text"
        animation="wave"
        width={250}
        sx={{ fontSize: "2rem" }}
      />
    </Box>
  );
}

"use client";
import Skeleton from "@mui/material/Skeleton";

export const cardSkeleton = [1, 2, 3, 4];
export default function CatalogSkeletonLoading() {
  return (
    <>
      <Skeleton variant="rectangular" width={345} height={330} />
      <Skeleton variant="text" width={100} sx={{ fontSize: "3rem" }} />
      <Skeleton variant="text" width={250} sx={{ fontSize: "2rem" }} />
    </>
  );
}

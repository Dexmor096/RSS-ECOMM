"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Box, Button, ButtonGroup, Typography, Stack } from "@mui/material";
// import { useRouter } from "next/navigation";

export default function NotFound({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  // const router = useRouter();
  return (
    <Stack sx={{ backgroundColor: "#1D1E1E" }}>
      <Box
        sx={{
          margin: "0 auto",
          alignItems: "center",
          maxWidth: "880px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          color="blue"
          fontFamily="Helvetica"
          fontSize="260px"
        >
          404
        </Typography>
        <Typography
          margin="25px 0"
          color="white"
          fontSize="42px"
          lineHeight="125%"
          fontFamily="Helvetica"
        >
          Page not found
        </Typography>
        <Typography
          textAlign="center"
          color="rgba(255, 255, 255, 0.8)"
          fontSize="24px"
          lineHeight="125%"
          fontFamily="Helvetica"
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <ButtonGroup sx={{ columnGap: "15px", marginTop: "40px" }}>
          <Button
            // onClick={() => router.back()}
            href="#"
            LinkComponent={Link}
            sx={{
              padding: "20px 35px",
              backgroundColor: "blue",
              color: "#fff",
              fontSize: "1rem",
              borderRadius: "none",
              maxHeight: "60px",
            }}
          >
            Go Back
          </Button>
          <Button
            href="/"
            LinkComponent={Link}
            sx={{
              padding: "20px 35px",
              backgroundColor: "#fff",
              color: " #959595",
              fontSize: "1rem",
              borderRadius: "none",
              maxHeight: "60px",
            }}
          >
            Homepage
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
}

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NetworkIcon from "./networkIcon";
import Stack from "@mui/material/Stack";

export default function SocialNetwork({
  description,
}: {
  description: string;
}) {
  return (
    <Stack spacing={1} sx={{ textAlign: "center" }}>
      <Typography variant="h5" color="inherit">
        {description}
      </Typography>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <NetworkIcon source="google" text="google" />
        </Grid>
        <Grid item xs={6}>
          <NetworkIcon source="twitter" text="twitter" />
        </Grid>
        <Grid item xs={6}>
          <NetworkIcon source="apple" text="apple" />
        </Grid>
        <Grid item xs={6}>
          <NetworkIcon source="facebook" text="facebook" />
        </Grid>
      </Grid>
    </Stack>
  );
}

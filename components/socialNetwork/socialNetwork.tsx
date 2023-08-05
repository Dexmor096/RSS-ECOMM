import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NetworkIcon from "./networkIcon";

export default function SocialNetwork() {
  return (
    <>
      <Typography variant="h6" color="inherit">
        ИЛИ ВОЙДИ С ПОМОЩЬЮ...
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
    </>
  );
}

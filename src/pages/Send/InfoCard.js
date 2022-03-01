import React from "react";

// Mui Imports
import { Grid, Typography } from "@mui/material";

const InfoCard = (props) => {
  const styles = {
    gridItem: {
      p: 3,
      pb: 1,
      width: 600,
    },
    textGrid: {
      p: 1,
      px: 5,
      mb: 2,
      justifyContent: "space-between",
    },
  };
  return (
    <Grid container justifyContent="center">
      <Grid item sx={styles.gridItem}>
        <Grid item display="flex" sx={styles.textGrid}>
          <Typography display="inline-flex">Fees:</Typography>
          <Typography display="inline-flex" sx={{ textAlign: "right" }}>
            xxxxxx
          </Typography>
        </Grid>
        <Grid item display="flex" sx={styles.textGrid}>
          <Typography display="inline-flex">Estimated Received</Typography>
          <Typography display="inline-flex" sx={{ textAlign: "right" }}>
            xxxxxx
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCard;

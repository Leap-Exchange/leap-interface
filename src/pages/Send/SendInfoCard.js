import React from "react";

// Mui Imports
import { Grid, Typography } from "@mui/material";

const SendInfoCard = (props) => {
  return (
    <Grid container justifyContent="center">
      <Grid item sx={{ p: 3, pb: 1, width: 600 }}>
        <Grid
          item
          display="flex"
          sx={{
            p: 1,
            px: 5,
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Typography display="inline-flex">Fees:</Typography>
          <Typography display="inline-flex" sx={{ textAlign: "right" }}>
            xxxxxx
          </Typography>
        </Grid>
        <Grid
          item
          display="flex"
          sx={{
            p: 1,
            px: 5,
            mb: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography display="inline-flex">Estimated Received</Typography>
          <Typography display="inline-flex" sx={{ textAlign: "right" }}>
            xxxxxx
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SendInfoCard;

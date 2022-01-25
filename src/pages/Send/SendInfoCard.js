import React from "react";

// Mui Imports
import { Grid, Typography } from "@mui/material";

const SendInfoCard = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ p: 3, py: 0, bgcolor: "secondary.main" }}
    >
      <Grid item xs={8} sx={{ p: 3, pb: 1, bgcolor: "warning.main" }}>
        <Grid
          item
          display="flex"
          sx={{
            bgcolor: "secondary.main",
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
            bgcolor: "secondary.main",
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

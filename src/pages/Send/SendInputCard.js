import React from "react";

// Material Kit Imports
import MKInput from "components/MKInput";

// Mui Imports
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// Custom Component Imports
import NetworkSelector from "components/NetworkSelector/NetworkSelector";

const SendInputCard = (props) => {
  const label = props.id === "Source" ? "From" : "To (Estimated)";

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ p: 3, bgcolor: "secondary.main" }}
    >
      <Grid item sx={{ p: 3, bgcolor: "warning.main", width: 600 }}>
        <Paper
          elevation={3}
          sx={{ borderRadius: 6, bgcolor: "primary.main", p: 3 }}
        >
          <Grid
            item
            display="flex"
            sx={{
              bgcolor: "secondary.main",
              p: 1,
              mb: 6,
              justifyContent: "space-between",
            }}
          >
            <Typography display="inline-flex">{label}</Typography>
            <Typography display="inline-flex" sx={{ textAlign: "right" }}>
              Balance: xxxxxx
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            sx={{
              bgcolor: "secondary.main",
              p: 1,
              justifyContent: "space-between",
            }}
          >
            <NetworkSelector />
            <MKInput label="Amount" />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SendInputCard;

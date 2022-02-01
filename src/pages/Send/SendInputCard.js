import React from "react";

// Material Kit Imports
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Mui Imports
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// Custom Component Imports
import NetworkSelector from "components/NetworkSelector/NetworkSelector";

const SendInputCard = (props) => {
  const label = props.id === "Source" ? "From" : "To (Estimated)";

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid item sx={{ p: 3, width: 600 }}>
        <Paper elevation={3} sx={{ borderRadius: 6, p: 3 }}>
          <Grid
            item
            display="flex"
            sx={{
              p: 1,
              mb: 6,
              justifyContent: "space-between",
            }}
          >
            <MKTypography
              display="inline-flex"
              variant="button"
              fontWeight="bold"
              color="dark.main"
              textTransform="none"
            >
              {label}
            </MKTypography>
            <MKTypography
              display="inline-flex"
              variant="button"
              fontWeight="bold"
              color="dark.main"
              textTransform="none"
              sx={{ textAlign: "right" }}
            >
              Balance: xxxxxx
            </MKTypography>
          </Grid>
          <Grid
            item
            display="flex"
            sx={{
              p: 1,
              justifyContent: "space-between",
            }}
          >
            <NetworkSelector />
            <MKInput label="Amount" endAdornment={<button label="hi" />} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SendInputCard;

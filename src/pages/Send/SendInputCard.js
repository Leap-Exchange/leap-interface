import React from "react";

// Material Kit Imports
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Mui Imports
import Grid from "@mui/material/Grid";

// Custom Component Imports
import NetworkSelector from "components/NetworkSelector/NetworkSelector";
import Card from "components/UI/Card/Card";

const SendInputCard = (props) => {
  const label = props.id === "Source" ? "From" : "To (Estimated)";

  const styles = {
    gridItem: {
      p: 1,
      justifyContent: "space-between",
    },
  };

  return (
    <Card>
      <Grid item display="flex" sx={{ ...styles.gridItem, mb: 6 }}>
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
      <Grid item display="flex" sx={styles.gridItem}>
        <NetworkSelector />
        <MKInput label="Amount" />
      </Grid>
    </Card>
  );
};

export default SendInputCard;

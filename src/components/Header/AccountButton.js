import React from "react";

import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Mui Imports
import { Grid, Typography } from "@mui/material";

const AccountButton = (props) => {
  const width = props.isSmallScreen ? 6 : 4;

  return (
    <Grid
      item
      display="flex"
      justifyContent="flex-end"
      xs={width}
      sx={{ p: 1 }}
    >
      <MKButton
        variant="gradient"
        color="primary"
        sx={{ width: 1, px: 1.5, maxWidth: 165 }}
      >
        <Typography variant="inherit" sx={{ overflow: "hidden" }}>
          Connect A Wallet
        </Typography>
      </MKButton>
    </Grid>
  );
};

export default AccountButton;

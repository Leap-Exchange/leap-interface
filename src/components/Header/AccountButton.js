import React from "react";

import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Mui Imports
import { Grid, Typography } from "@mui/material";

const AccountButton = (props) => {
  const width = props.isSmallScreen ? 6 : 4;

  const styles = {
    root: {
      p: 1,
    },
    button: {
      width: 1,
      px: 1.5,
      maxWidth: 165,
    },
    typography: {
      overflow: "hidden",
    },
  };

  return (
    <Grid
      item
      display="flex"
      justifyContent="flex-end"
      xs={width}
      sx={styles.root}
    >
      <MKButton variant="gradient" color="primary" sx={styles.button}>
        <Typography variant="inherit" sx={styles.typography}>
          Connect A Wallet
        </Typography>
      </MKButton>
    </Grid>
  );
};

export default AccountButton;

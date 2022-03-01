import React, { useState } from "react";

// Material Kit Imports
import MKBox from "components/MKComponents/MKBox";
import MKTypography from "components/MKComponents/MKTypography";

// Mui Imports
import { Grid, Box, Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Custom Component Imports
import TokenSelector from "components/TokenSelector/TokenSelector";
import NetworkSelector from "components/NetworkSelector/NetworkSelector";
import ReceiptsCard from "./ReceiptsCard";

const Liquidity = () => {
  const styles = {
    root: {
      pt: 1,
      mb: 3,
    },
    button: {
      width: "140px",
    },
    gridItem: {
      p: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    typography: {
      mx: 2,
    },
  };
  return (
    <MKBox display="flex" flexDirection="column" justifyContent="center">
      <Grid container justifyContent="center" sx={styles.root}>
        <Grid item display="flex" sx={styles.gridItem}>
          <NetworkSelector />
          <MKTypography
            display="inline-flex"
            variant="button"
            fontWeight="bold"
            color="text"
            textTransform="none"
            sx={styles.typography}
          >
            on
          </MKTypography>
          <TokenSelector
            page="liquidity"
            onErr={() => {
              return;
            }}
          />
        </Grid>
      </Grid>
      <ReceiptsCard />
    </MKBox>
  );
};

export default Liquidity;

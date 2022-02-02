import React from "react";

// Material Kit Imports
import MKBox from "components/MKBox";

// Mui Imports
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Custom Component Imports
import HeaderNav from "./HeaderNav";
import AccountButton from "./AccountButton";
import Settings from "./Settings";

const Header = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = {
    root: {
      p: 5,
      py: 2,
    },
  };

  return (
    <MKBox display="flex" sx={styles.root}>
      <Grid container>
        {!isSmallScreen && <Settings isSmallScreen={isSmallScreen} />}

        <HeaderNav isSmallScreen={isSmallScreen} />

        {isSmallScreen && <Settings isSmallScreen={isSmallScreen} />}

        <AccountButton isSmallScreen={isSmallScreen} />
      </Grid>
    </MKBox>
  );
};

export default Header;

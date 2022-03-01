import React, { useState } from "react";

// routing imports
import { Link, useLocation } from "react-router-dom";

// Mui Imports
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function HeaderNav(props) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const handleTabType = (event, newValue) => setActiveTab(newValue);

  const width = props.isSmallScreen ? 12 : 4;

  const styles = {
    root: {
      p: 1,
    },
    tabs: {
      // bgcolor: "transparent.main",
    },
    tab: {
      bgcolor: "transparent.main",
    },
  };
  return (
    <Grid item display="flex" xs={width} sx={styles.root}>
      <AppBar position="static" sx={styles.tab}>
        <Tabs
          value={location.pathname}
          onChange={handleTabType}
          display="flex"
          sx={styles.tabs}
          textColor="primary"
        >
          <Tab
            disableRipple
            label="Send"
            value="/send"
            component={Link}
            to="/send"
          />
          <Tab
            disableRipple
            label="Liquidity"
            value="/liquidity"
            component={Link}
            to="/liquidity"
          />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

export default HeaderNav;

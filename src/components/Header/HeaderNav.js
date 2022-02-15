import { useState } from "react";

import React from "react";

// Mui Imports
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function HeaderNav(props) {
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
          value={activeTab}
          onChange={handleTabType}
          display="flex"
          sx={styles.tabs}
          textColor="primary"
        >
          <Tab label="Send" sx={styles.tab} />
          <Tab label="Liquidity" />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

export default HeaderNav;

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

  return (
    <Grid item display="flex" xs={width} sx={{ p: 1 }}>
      <AppBar position="static">
        <Tabs
          value={activeTab}
          onChange={handleTabType}
          display="flex"
          sx={{
            bgcolor: "transparent.main",
          }}
        >
          <Tab label="Send" />
          <Tab label="Liquidity" />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

export default HeaderNav;

import { useState } from "react";

import React from "react";

// Mui Imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function HeaderNav() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <AppBar position="static">
        <Tabs
          value={activeTab}
          onChange={handleTabType}
          display="flex"
          sx={
            {
              // bgcolor: "transparent.main",
            }
          }
        >
          <Tab label="Send" />
          <Tab label="Liquidity" />
        </Tabs>
      </AppBar>
    </Container>
  );
}

export default HeaderNav;

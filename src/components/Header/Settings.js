import React from "react";

// Material Kit Imports
import MKButton from "components/MKButton";

// Mui Imports
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const LightMode = true;

const Settings = (props) => {
  const width = props.isSmallScreen ? 6 : 4;

  const margin = props.isSmallScreen ? "8%" : 2;

  const sx = { mx: margin };

  return (
    <Grid item xs={width} sx={{ p: 1 }}>
      <MKButton variant="text" color="primary" iconOnly circular sx={sx}>
        {LightMode ? <LightModeIcon /> : <DarkModeIcon />}
      </MKButton>
      <MKButton variant="text" color="primary" iconOnly circular sx={sx}>
        <SettingsIcon />
      </MKButton>
    </Grid>
  );
};

export default Settings;

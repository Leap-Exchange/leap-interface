import React from "react";

// Material Kit Imports
import MKButton from "components/MKButton";

// Mui Imports
import SettingsIcon from "@mui/icons-material/Settings";

const LightMode = true;

const SettingsButton = (props) => {
  return (
    <MKButton variant="text" color="primary" iconOnly circular>
      <SettingsIcon />
    </MKButton>
  );
};

export default SettingsButton;

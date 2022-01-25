import React from "react";

// Material Kit Imports
import MKButton from "components/MKButton";

// Mui Imports
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const LightMode = true;

const ColorThemeButton = (props) => {
  return (
    <MKButton variant="text" color="primary" iconOnly circular>
      {LightMode ? <LightModeIcon /> : <DarkModeIcon />}
    </MKButton>
  );
};

export default ColorThemeButton;

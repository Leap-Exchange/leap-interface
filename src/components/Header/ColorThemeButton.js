import React from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "Store/ThemeSlice";

// Material Kit Imports
import MKButton from "components/MKComponents/MKButton";

// Mui Imports
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const LightMode = true;

const ColorThemeButton = (props) => {
  const themeMode = useSelector((state) => state.theme.lightMode);
  const dispatch = useDispatch();

  const toggleThemeHandler = (event) => {
    console.log(themeMode);
    console.log(themeActions);
  };

  return (
    <MKButton
      onClick={toggleThemeHandler}
      variant="text"
      color="primary"
      iconOnly
      circular
    >
      {LightMode ? <LightModeIcon /> : <DarkModeIcon />}
    </MKButton>
  );
};

export default ColorThemeButton;

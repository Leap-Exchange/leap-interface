import React from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "Store/ThemeSlice";

// Material Kit Imports
import MKButton from "components/MKComponents/MKButton";

// Mui Imports
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Settings = (props) => {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleThemeHandler = (event) => {
    console.log(themeMode);
    dispatch(themeActions.toggleTheme());
  };

  const width = props.isSmallScreen ? 6 : 4;
  const margin = props.isSmallScreen ? "8%" : 2;

  const lightMode = true;
  const styles = { root: { p: 1 }, button: { mx: margin } };
  return (
    <Grid item xs={width} sx={styles.root}>
      <MKButton
        onClick={toggleThemeHandler}
        variant="text"
        color="primary"
        iconOnly
        circular
        sx={styles.button}
      >
        {themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </MKButton>
      <MKButton
        variant="text"
        color="primary"
        iconOnly
        circular
        sx={styles.button}
      >
        <SettingsIcon />
      </MKButton>
    </Grid>
  );
};

export default Settings;

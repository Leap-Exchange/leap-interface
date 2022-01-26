import React from "react";

// Material Kit Imports
import MKBox from "components/MKBox";

// Mui Imports
import Grid from "@mui/material/Grid";

// Custom Component Imports
import HeaderNav from "./HeaderNav";
import AccountButton from "./AccountButton";
import ColorThemeButton from "./ColorThemeButton";
import SettingsButton from "./SettingsButton";

const Header = (props) => {
  return (
    <MKBox display="flex" sx={{ px: 5, py: 3, bgcolor: "success.main" }}>
      <Grid container>
        <Grid item xs={4} sx={{ bgcolor: "secondary.main" }}>
          <ColorThemeButton />
          <SettingsButton />
        </Grid>
        <Grid item display="flex" xs={4} sx={{ bgcolor: "warning.main" }}>
          <HeaderNav />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="flex-end"
          xs={4}
          sx={{ bgcolor: "secondary.main" }}
        >
          <AccountButton />
        </Grid>
      </Grid>
    </MKBox>
  );
};

export default Header;

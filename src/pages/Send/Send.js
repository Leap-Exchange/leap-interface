import React from "react";

// Material Kit Imports
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import SendInputCard from "./SendInputCard";
import SendInfoCard from "./SendInfoCard";
import SelectToken from "./SelectToken";

const Send = () => {
  return (
    <MKBox
      display="flex"
      bgColor="warning"
      flexDirection="column"
      justifyContent="center"
      sx={{ p: 3 }}
    >
      <SelectToken />
      <SendInputCard id="Source" />
      <SendInputCard id="Destination" />
      <SendInfoCard />

      <Grid
        container
        justifyContent="center"
        sx={{ p: 3, py: 0, bgcolor: "secondary.main" }}
      >
        <Grid item xs={8} sx={{ bgcolor: "warning.main" }}>
          <Grid
            item
            display="flex"
            sx={{
              bgcolor: "secondary.main",
              p: 1,
              justifyContent: "space-evenly",
            }}
          >
            <MKButton>Approve</MKButton>
            <MKButton>Submit</MKButton>
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
};

export default Send;

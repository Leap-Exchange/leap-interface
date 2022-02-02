import React from "react";

// Material Kit Imports
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import SendInputCard from "./SendInputCard";
import SendInfoCard from "./SendInfoCard";
import SelectToken from "./TokenSelector/TokenSelector";

const Send = () => {
  return (
    <MKBox display="flex" flexDirection="column" justifyContent="center">
      <SelectToken />
      <SendInputCard id="Source" />
      <SendInputCard id="Destination" />
      <SendInfoCard />

      <Grid container justifyContent="center">
        <Grid item sx={{ maxWidth: "md" }}>
          <Grid
            item
            display="flex"
            sx={{
              p: 3,
              justifyContent: "space-evenly",
            }}
          >
            <MKButton color="primary" size="large" sx={{ width: 120, mx: 4 }}>
              Approve
            </MKButton>
            <MKButton color="primary" size="large" sx={{ width: 120, mx: 4 }}>
              Submit
            </MKButton>
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
};

export default Send;

import React, { useState } from "react";

// Material Kit Imports
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import SendInputCard from "./SendInputCard";
import SendInfoCard from "./SendInfoCard";
import TokenSelector from "./TokenSelector/TokenSelector";

const Send = () => {
  const [sourceNetwork, setSourceNetwork] = useState();
  const [destinationNetwork, setDestinationNetwork] = useState();

  const networkSelectHandler = (side, network) => {
    side === "source"
      ? setSourceNetwork(network)
      : setDestinationNetwork(network);
    console.log(sourceNetwork, destinationNetwork);
  };

  return (
    <MKBox display="flex" flexDirection="column" justifyContent="center">
      <TokenSelector />
      <SendInputCard id="Source" onNetworkSelect={networkSelectHandler} />
      <SendInputCard id="Destination" onNetworkSelect={networkSelectHandler} />
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

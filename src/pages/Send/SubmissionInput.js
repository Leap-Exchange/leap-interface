import React, { useState, useRef, useCallback, useEffect } from "react";

// UseDApp Imports
import { useContractCall, useEthers, useTokenBalance } from "@usedapp/core";
import { ERC20Interface } from "@usedapp/core";

// Material Kit Imports
import MKButton from "components/MKComponents/MKButton";

// Mui imports
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const SubmissionInput = (props) => {
  const styles = {
    gridItem: {
      p: 3,
      justifyContent: "space-evenly",
      maxWidth: "md",
    },
    button: {
      width: 120,
      mx: 4,
    },
  };

  // THIS IS COOKED BECAUSE WE DONT WANT TO PERFORM THE CALL WHENEVER THE COMPONENT IS RENDERED
  const sourceContractAddress = "";
  // const approve = useContractCall({
  //   abi: ERC20Interface,
  //   address: sourceContractAddress,
  //   method: "approve",
  //   args: [],
  // });
  // const send = useContractCall({
  //   abi: ERC20Interface,
  //   address: sourceContractAddress,
  //   method: "balanceOf",
  //   args: [],
  // });

  return (
    <Grid container justifyContent="center">
      <Grid item display="flex" sx={styles.root}>
        <MKButton
          color="primary"
          size="large"
          sx={styles.button}
          // onclick={useContractCall({
          //   abi: ERC20Interface,
          //   address: sourceContractAddress,
          //   method: "approve",
          //   args: [],
          // })}
        >
          Approve
        </MKButton>
        <MKButton color="primary" size="large" sx={styles.button}>
          Submit
        </MKButton>
      </Grid>
    </Grid>
  );
};

export default SubmissionInput;

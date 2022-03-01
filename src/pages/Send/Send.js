import React from "react";

// Material Kit Imports
import MKBox from "components/MKComponents/MKBox";
import MKButton from "components/MKComponents/MKButton";

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import InputCard from "./InputCard";
import InfoCard from "./InfoCard";
import TokenInput from "./TokenInput";
import SubmissionInput from "./SubmissionInput";
import TokenSelector from "components/TokenSelector/TokenSelector";

const Send = () => {
  return (
    <MKBox display="flex" flexDirection="column" justifyContent="center">
      <TokenInput />
      <InputCard id="Source" />
      <InputCard id="Destination" />
      <InfoCard />
      <SubmissionInput />
    </MKBox>
  );
};

export default Send;

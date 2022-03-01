import React, { useState } from "react";

// Material Kit Imports
import MKInput from "components/MKComponents/MKInput";
import MKTypography from "components/MKComponents/MKTypography";

// Mui Imports
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

// Custom Component Imports
import NetworkSelector from "components/NetworkSelector/NetworkSelector";
import Card from "components/UI/Card/Card";
import ReceiptsList from "./ReceiptsList";

const ReceiptsCard = (props) => {
  const label = props.id === "Source" ? "From" : "To (Estimated)";

  const [input, setInput] = useState("");

  const userInputHandler = (event) => {
    if (!isNaN(event.nativeEvent.target.value)) {
      setInput(event.nativeEvent.target.value);
    }
  };

  const styles = {
    root: {},
    gridItem: {
      p: 2,
      justifyContent: "space-between",
    },
  };

  return (
    <Card>
      <Grid item display="flex" sx={styles.gridItem}>
        <ReceiptsList />
      </Grid>
    </Card>
  );
};

export default ReceiptsCard;

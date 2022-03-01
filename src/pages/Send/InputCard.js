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

const InputCard = (props) => {
  const label = props.id === "Source" ? "From" : "To (Estimated)";

  const [input, setInput] = useState("");

  const userInputHandler = (event) => {
    if (!isNaN(event.nativeEvent.target.value)) {
      setInput(event.nativeEvent.target.value);
    }
  };

  const styles = {
    gridItem: {
      p: 1,
      justifyContent: "space-between",
    },
  };

  return (
    <Card>
      <Grid item display="flex" sx={{ ...styles.gridItem, mb: 6 }}>
        <MKTypography
          display="inline-flex"
          variant="button"
          fontWeight="bold"
          color="text"
          textTransform="none"
        >
          {label}
        </MKTypography>
      </Grid>
      <Grid item display="flex" sx={styles.gridItem}>
        <NetworkSelector id={props.id} page="send" />
        <Input
          placeholder="0.0"
          value={input}
          onChange={userInputHandler}
          endAdornment={
            <InputAdornment position="start">
              <MKTypography
                display="inline-flex"
                variant="button"
                fontWeight="bold"
                color="dark.main"
                textTransform="none"
                sx={{ textAlign: "right", m: 0.5 }}
              >
                ETH
              </MKTypography>
            </InputAdornment>
          }
          disableUnderline
          inputProps={{ style: { textAlign: "right" } }}
        />
      </Grid>
    </Card>
  );
};

export default InputCard;

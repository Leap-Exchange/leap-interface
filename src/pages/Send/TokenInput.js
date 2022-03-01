import React, { Fragment, useState } from "react";

// mui imports
import {
  Grid,
  Collapse,
  IconButton,
  Alert,
  AlertTitle,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// custom component imports
import TokenSelector from "components/TokenSelector/TokenSelector";
import { useSelector } from "react-redux";

const TokenInput = (props) => {
  const [err, setErr] = useState();
  const tokenSelectorErrHandler = (err) => {
    setErr(err);
  };

  const styles = {
    root: {
      pt: 1,
    },
    gridItem: {
      p: 1,
      justifyContent: "center",
      display: "flex",
    },
  };
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Collapse in={Boolean(err)} unmountOnExit mountOnEnter sx={{}}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErr();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Please select both networks
          </Alert>
        </Collapse>
      </Box>
      <Grid container justifyContent="center" sx={styles.root}>
        <Grid item component="div" sx={styles.gridItem}>
          <TokenSelector page="send" onErr={tokenSelectorErrHandler} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TokenInput;

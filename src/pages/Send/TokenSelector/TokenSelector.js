import React, { Fragment, useState } from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { tokenInputActions } from "Store/TokenInputSlice";

// Mui Imports
import { Grid, Typography } from "@mui/material";
import MKButton from "components/MKButton";
import MKAvatar from "components/MKAvatar";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import { fontSize, style, typography } from "@mui/system";

const tokenObject = require("../../../Tokenlist.json");
const tokenList = tokenObject.tokens;

const TokenSelector = (props) => {
  const dispatch = useDispatch();

  // modal state
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    if (!selectedSourceNetwork.name || !selectedDestinationetwork.name) {
      setError("Please select both networks");
      return;
    }
    setShowModal((prevState) => !prevState);
    setError();
  };

  // error state
  const [error, setError] = useState();

  // network state
  const selectedSourceNetwork = useSelector(
    (state) => state.networkInput.selectedSourceNetwork
  );
  const selectedDestinationetwork = useSelector(
    (state) => state.networkInput.selectedDestinationNetwork
  );
  const selectedNetworks = {
    source: useSelector((state) => state.networkInput.selectedSourceNetwork),
    destination: useSelector(
      (state) => state.networkInput.selectedDestinationNetwork
    ),
  };

  // token state
  const selectedToken = useSelector((state) => state.tokenInput.selectedToken);
  const filteredTokenList = tokenList.filter((token) => {
    return (
      token.chainId == selectedSourceNetwork.ChainID &&
      token.chainId == selectedDestinationetwork.ChainID
    );
  });

  // event handlers
  const tokenSelectHandler = (token) => {
    dispatch(tokenInputActions.changeSelectedToken(token));
    toggleModal();
  };

  // styling
  const styles = {
    root: {
      pt: 1,
    },
    button: {
      width: "140px",
    },
    gridItem: {
      p: 1,
      justifyContent: "space-evenly",
    },
    typography: {
      ml: 1.5,
      fontSize: 13,
    },
  };

  return (
    <Grid container justifyContent="center" sx={styles.root}>
      <Grid item display="flex" sx={styles.gridItem}>
        {error && <typography>{error}</typography>}
        <MKButton
          variant={selectedToken ? "outlined" : "outlined"}
          color={selectedToken ? "primary" : "primary"}
          onClick={toggleModal}
          sx={styles.button}
        >
          {selectedToken ? (
            <Fragment>
              <MKAvatar src={selectedToken.logoURI} size="xs" />
              <Typography variant="inherit" sx={styles.typography}>
                {selectedToken.symbol}
              </Typography>
            </Fragment>
          ) : (
            "Select A Token"
          )}
        </MKButton>
        {selectedNetworks.source && selectedNetworks.destination && (
          <SimpleModal
            toggleModal={toggleModal}
            showModal={showModal}
            modalTitle="Select a Token"
            modalHeader={<ModalHeader />}
            modalContent={
              <ModalContent
                tokens={filteredTokenList}
                onTokenSelect={tokenSelectHandler}
              />
            }
          />
        )}
      </Grid>
    </Grid>
  );
};

export default TokenSelector;

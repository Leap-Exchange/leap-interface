import React, { Fragment, useState } from "react";

// Mui Imports
import { Grid, Typography } from "@mui/material";
import MKButton from "components/MKButton";
import MKAvatar from "components/MKAvatar";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import { fontSize, style } from "@mui/system";

const tokenObject = require("../../../Tokenlist.json");
const tokenList = tokenObject.tokens;

const TokenSelector = (props) => {
  const selectedNetwork = props.selectedNetwork;
  const [showModal, setShowModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState();
  const toggleModal = () => setShowModal((prevState) => !prevState);

  const tokenSelectHandler = (token) => {
    setSelectedToken(token);
    toggleModal();
  };

  // const filteredTokenList = tokenList.filter(
  //   (token) => token.chainID == selectedNetwork.chainID
  // );

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
        <MKButton
          variant={selectedToken ? "gradient" : "outlined"}
          color="primary"
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
        <SimpleModal
          toggleModal={toggleModal}
          showModal={showModal}
          modalTitle="Select a Token"
          modalHeader={<ModalHeader />}
          modalContent={
            <ModalContent
              tokens={tokenList}
              onTokenSelect={tokenSelectHandler}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default TokenSelector;

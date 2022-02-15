import React, { useState } from "react";

// Mui Imports
import { Grid } from "@mui/material";
import MKButton from "components/MKButton";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

const tokenObject = require("../../../Tokenlist.json");
const tokenList = tokenObject.tokens;

const SelectToken = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);

  const styles = {
    root: {
      pt: 1,
    },
    gridItem: {
      p: 1,
      justifyContent: "space-evenly",
    },
  };
  return (
    <Grid container justifyContent="center" sx={styles.root}>
      <Grid item display="flex" sx={styles.gridItem}>
        <MKButton variant="outlined" color="primary" onClick={toggleModal}>
          Select A Token
        </MKButton>
        <SimpleModal
          toggleModal={toggleModal}
          showModal={showModal}
          modalTitle="Select a Token"
          modalHeader={<ModalHeader />}
          modalContent={<ModalContent tokens={tokenList} />}
        />
      </Grid>
    </Grid>
  );
};

export default SelectToken;

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

const tokenObject = require("../../../Tokenlist.json");
const tokenList = tokenObject.tokens;

const SelectToken = (props) => {
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
        <SimpleModal
          label="Select Token"
          modalTitle="Select a Token"
          modalHeader={<ModalHeader />}
          modalContent={<ModalContent tokens={tokenList} />}
        />
      </Grid>
    </Grid>
  );
};

export default SelectToken;

import { Fragment } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import MKAvatar from "components/MKAvatar";

// Mui Imports
import { Grid, Divider } from "@mui/material";

// Material Kit Imports
import MKInput from "components/MKInput/index";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";

const tokenObject = require("../../Tokenlist.json");
const tokenList = tokenObject.tokens;

function returnUID(address, chainID) {
  return `${address}_${chainID}`;
}

function returnModalContent(tokenList) {
  return (
    <List sx={{ maxHeight: 400, overflow: "auto" }}>
      {tokenList.map((token) => {
        return (
          <ListItem
            disablePadding
            key={returnUID(token.address, token.chainId)}
          >
            <ListItemButton>
              <ListItemIcon>
                <MKAvatar src={token.logoURI} size="sm" />
              </ListItemIcon>
              <ListItemText primary={token.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

function returnModalHeader() {
  return <MKInput type="search" label="Search Tokens" fullWidth />;
}

const SelectToken = (props) => {
  return (
    <Grid container justifyContent="center" sx={{ pt: 1 }}>
      <Grid item>
        <Grid
          item
          display="flex"
          sx={{
            p: 1,
            justifyContent: "space-evenly",
          }}
        >
          <SimpleModal
            label="Select Token"
            modalTitle="Select a Token"
            modalHeader={returnModalHeader()}
            modalContent={returnModalContent(tokenList)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectToken;

import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

// Mui Imports
import { Grid } from "@mui/material";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";

const tokenObject = require("../../Tokenlist.json");
const tokenList = tokenObject.tokens;

function modalContent(tokenList) {
  return (
    <List sx={{ maxHeight: 1, overflow: "auto" }}>
      {tokenList.map((token) => {
        return (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={token.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

const SelectToken = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ p: 3, py: 0, bgcolor: "secondary.main" }}
    >
      <Grid item xs={8} sx={{ bgcolor: "warning.main" }}>
        <Grid
          item
          display="flex"
          sx={{
            bgcolor: "secondary.main",
            p: 1,
            justifyContent: "space-evenly",
          }}
        >
          <SimpleModal
            label="Select Token"
            modalTitle="Select a Token"
            modalContent={modalContent(tokenList)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectToken;

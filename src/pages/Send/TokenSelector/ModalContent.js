import React from "react";

// Material Kit Imports
import MKAvatar from "components/MKAvatar";

// Mui Imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ModalContent = (props) => {
  const { tokens } = props;

  function returnUID(address, chainID) {
    return `${address}_${chainID}`;
  }

  return (
    <List sx={{ maxHeight: 400, overflow: "auto" }}>
      {tokens.map((token) => {
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
};

export default ModalContent;

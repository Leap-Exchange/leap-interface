import React, { useState } from "react";

// Material Kit Imports
import MKAvatar from "components/MKComponents/MKAvatar";

// Mui Imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Alert, AlertTitle } from "@mui/material";

const ModalContent = (props) => {
  const { tokens, onTokenSelect: tokenSelectHandler } = props;
  const [selectedItem, setSelectedItem] = useState(0);

  function returnUID(address, chainID) {
    return `${address}_${chainID}`;
  }

  const handleListItemClick = (event, token, identifier) => {
    setSelectedItem(identifier);
    tokenSelectHandler(token);
  };

  return (
    <List sx={{ maxHeight: 400, overflow: "auto" }}>
      {tokens.length < 1 ? (
        <Alert severity="warning" sx={{ my: 10 }}>
          <AlertTitle>No tokens to display!</AlertTitle>
          There are no tokens that exist on both networks
        </Alert>
      ) : (
        <ListItem disablePadding key={0}>
          <ListItemButton
            selected={selectedItem === 0}
            onClick={(event) => handleListItemClick(event, {}, 0)}
          >
            <ListItemText primary="select a token" />
          </ListItemButton>
        </ListItem>
      )}
      {tokens.map((token) => {
        const uniqueID = returnUID(token.address, token.chainId);
        return (
          <ListItem disablePadding key={uniqueID}>
            <ListItemButton
              selected={selectedItem === uniqueID}
              onClick={(event) => handleListItemClick(event, token, uniqueID)}
            >
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

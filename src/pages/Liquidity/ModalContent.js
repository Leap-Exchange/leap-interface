import React, { useState } from "react";

// Material Kit Imports
import MKAvatar from "components/MKComponents/MKAvatar";

// Mui Imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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

  return <div></div>;
};

export default ModalContent;

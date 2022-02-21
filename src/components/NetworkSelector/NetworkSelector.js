import { useState, Fragment } from "react";

// Custom Component Imports
import Dropdown from "components/UI/Dropdown/Dropdown";
import { id } from "@ethersproject/hash";

const NetworkSelector = (props) => {
  const networks = [
    { name: "Etherium Mainnet", chainID: 1 },
    { name: "Optimism Kovan", ChainID: 69 },
    { name: "Polygon Testnet)", ChainID: 80001 },
  ];

  const outputs = networks.map((network) => ({
    label: network.name,
    ID: network.chainID,
  }));

  return (
    <Dropdown
      outputs={outputs}
      label="Select Network"
      action={props.onNetworkSelect}
    />
  );
};

export default NetworkSelector;

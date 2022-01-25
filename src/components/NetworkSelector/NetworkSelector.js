import { useState, Fragment } from "react";

// Custom Component Imports
import Dropdown from "components/UI/Dropdown/Dropdown";

const NetworkSelector = (props) => {
  const networks = ["network 1", "network 2", "network 3"];

  const outputs = { labels: networks };

  return <Dropdown outputs={outputs} label="Select Network" />;
};

export default NetworkSelector;

import { useState, Fragment } from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { networkInputActions } from "Store/NetworkInputSlice";

// Material kit imports
import MKButton from "components/MKButton";

// @mui material components
import { Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NetworkSelector = (props) => {
  const dispatch = useDispatch();

  // dropdown state
  const [dropdown, setDropdown] = useState(null);
  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  // error/popover state

  // network state
  const selectedNetwork = useSelector((state) =>
    props.id === "Source"
      ? state.networkInput.selectedSourceNetwork
      : state.networkInput.selectedDestinationNetwork
  );

  const networks = [
    { name: "Etherium Mainnet", ChainID: 1 },
    { name: "Optimism Kovan", ChainID: 69 },
    { name: "Polygon Testnet", ChainID: 80001 },
  ];

  // action handlers
  const actionHandler = (event, network) => {
    closeDropdown();
    dispatch(
      networkInputActions.changeSelectedNetwork({
        network: network,
        id: props.id,
      })
    );
  };

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <Fragment>
      <MKButton
        variant={selectedNetwork.name ? "gradient" : "outlined"}
        color="primary"
        onClick={openDropdown}
        sx={{ overflow: "hidden" }}
      >
        {selectedNetwork.name ? selectedNetwork.name : "select a network"}
        <ExpandMoreIcon sx={dropdownIconStyles} />
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        {networks.map((network) => (
          <MenuItem
            key={network.chainID}
            onClick={(event) => actionHandler(event, network)}
          >
            {network.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default NetworkSelector;

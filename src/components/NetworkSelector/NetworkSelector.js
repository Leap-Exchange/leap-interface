import { useState, Fragment } from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { networkInputActions } from "Store/NetworkInputSlice";
import { tokenInputActions } from "Store/TokenInputSlice";

// Material kit imports
import MKButton from "components/MKComponents/MKButton";

// mui imports
import { Menu, MenuItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NetworkSelector = (props) => {
  const dispatch = useDispatch();

  // dropdown state
  const [dropdown, setDropdown] = useState(null);
  const openDropdown = ({ currentTarget }) => {
    setDropdown(currentTarget);
  };
  const closeDropdown = () => setDropdown(null);

  // token state
  const selectedToken = useSelector((state) =>
    props.page === "send"
      ? state.tokenInput.selectedToken.send
      : state.tokenInput.selectedToken.liquidity
  );

  // network state
  const { source: sourceNetwork, destination: destinationNetwork } =
    useSelector((state) => state.networkInput.selectedNetworks.send);
  const liquidityNetwork = useSelector(
    (state) => state.networkInput.selectedNetworks.liquidity
  );
  const selectedNetwork = useSelector((state) => {
    if (props.page === "send") {
      return props.id === "Source" ? sourceNetwork : destinationNetwork;
    } else {
      return liquidityNetwork;
    }
  });

  const networks = [
    { name: "Etherium Mainnet", ChainID: 1 },
    { name: "Optimism Kovan", ChainID: 69 },
    { name: "Polygon Testnet", ChainID: 80001 },
  ];

  // action handlers
  const actionHandler = (event, network) => {
    closeDropdown();
    props.page === "send"
      ? dispatchSendState(network)
      : dispatchLiquidityState(network);
  };

  const dispatchSendState = async (network) => {
    if (props.id === "Source") {
      dispatch(networkInputActions.changeSourceNetwork({ network }));
    } else {
      dispatch(networkInputActions.changeDestinationNetwork({ network }));
    }
  };

  const dispatchLiquidityState = async (network) => {
    dispatch(networkInputActions.changeLiquidityNetwork({ network }));
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
        sx={{ width: "180px" }}
      >
        <Typography variant="inherit" sx={{ fontSize: 12 }}>
          {selectedNetwork.name ? selectedNetwork.name : "Select a Network"}
        </Typography>
        <ExpandMoreIcon sx={dropdownIconStyles} />
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        {networks.map((network) => (
          <MenuItem
            key={network.ChainID}
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

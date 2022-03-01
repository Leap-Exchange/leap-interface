import { useState, Fragment, useEffect } from "react";

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
  const networks2 = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org",
      ],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  };
  const networks = [
    {
      chainName: "Ethereum Mainnet",
      rpcUrls: [
        "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
        "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
        "https://api.mycryptoapi.com/eth",
        "https://cloudflare-eth.com",
      ],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      chainId: `1`,
      blockExplorerUrls: ["https://etherscan.io"],
    },
    ,
    {
      chainName: "Optimism Kovan",
      rpcUrls: ["https://kovan.optimism.io/"],
      nativeCurrency: {
        name: "Kovan Ether",
        symbol: "KOR",
        decimals: 18,
      },
      blockExplorerUrls: ["https://kovan-optimistic.etherscan.io"],
      chainId: `69`,
    },
    {
      chainName: "Mumbai",
      rpcUrls: [
        "https://matic-mumbai.chainstacklabs.com",
        "https://rpc-mumbai.maticvigil.com",
        "https://matic-testnet-archive-rpc.bwarelabs.com",
      ],
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      chainId: `80001`,
      blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    },
  ];

  const changeNetwork = async ({ network }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      // console.log(network);
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const networkChanged = (chainId) => {
    console.log({ chainId });
  };
  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  // action handlers
  const handleNetworkSwitch = async (network) => {
    // console.log(network);
    await changeNetwork({ network });
  };

  const actionHandler = (event, network) => {
    closeDropdown();
    handleNetworkSwitch({
      ...network,
      chainId: `0x${Number(network.chainId).toString(16)}`,
    });
    props.page === "send"
      ? dispatchSendState(network)
      : dispatchLiquidityState(network);
  };

  const dispatchSendState = async (network) => {
    // console.log(network);
    if (props.id === "Source") {
      dispatch(networkInputActions.changeSourceNetwork({ network }));
    } else {
      dispatch(networkInputActions.changeDestinationNetwork({ network }));
    }
  };

  const dispatchLiquidityState = async (network) => {
    // console.log(network);
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
        variant={selectedNetwork.chainName ? "gradient" : "outlined"}
        color="primary"
        onClick={openDropdown}
        sx={{ width: "180px" }}
      >
        <Typography variant="inherit" sx={{ fontSize: 12 }}>
          {selectedNetwork.chainName
            ? selectedNetwork.chainName
            : "Select a Network"}
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
            key={`${network.chainId}_${props.id}`}
            onClick={(event) => actionHandler(event, network)}
          >
            {network.chainName}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default NetworkSelector;

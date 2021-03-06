import React, { Fragment, useEffect, useState } from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { tokenInputActions } from "Store/TokenInputSlice";

// Mui Imports
import { Grid, Typography } from "@mui/material";
import MKButton from "components/MKComponents/MKButton";
import MKAvatar from "components/MKComponents/MKAvatar";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import { fontSize, style, typography } from "@mui/system";

const tokenObject = require("../../Tokenlist.json");
const tokenList = tokenObject.tokens;

const TokenSelector = (props) => {
  const dispatch = useDispatch();
  // network state
  const { source: sourceNetwork, destination: destinationNetwork } =
    useSelector((state) => state.networkInput.selectedNetworks.send);
  const liquidityNetwork = useSelector(
    (state) => state.networkInput.selectedNetworks.liquidity
  );

  // token state
  const selectedToken = useSelector((state) =>
    props.page === "send"
      ? state.tokenInput.selectedToken.send
      : state.tokenInput.selectedToken.liquidity
  );
  const filteredTokenList = tokenList.filter((token) => {
    if (props.page === "send") {
      return (
        token.chainId == sourceNetwork.chainId &&
        token.chainId == destinationNetwork.chainId
      );
    } else {
      return token.chainId == liquidityNetwork.chainId;
    }
  });

  // modal state
  const [showModal, setShowModal] = useState(false);
  const modalToBeMounted =
    props.page === "send"
      ? sourceNetwork.chainName && destinationNetwork.chainName
      : liquidityNetwork.chainName;
  const toggleModal = () => {
    const pageIsSend = props.page === "send";
    if (
      pageIsSend &&
      (!sourceNetwork.chainName || !destinationNetwork.chainName)
    ) {
      props.onErr("Please select a network");
      return;
    } else {
      setShowModal((prevState) => !prevState);
      setError(false);
    }
  };

  // error state
  const [error, setError] = useState();

  // event handlers
  const tokenSelectHandler = (token) => {
    dispatch(
      tokenInputActions.changeSelectedToken({ token, page: props.page })
    );
    toggleModal();
  };

  const checkTokenValid = async (page) => {
    const tokenIsValidOnSend =
      page === "send" &&
      selectedToken.chainId == sourceNetwork.chainId &&
      selectedToken.chainId == destinationNetwork.chainId;

    const tokenIsValidOnLiquidity =
      page === "liquidity" && selectedToken.chainId == liquidityNetwork.chainId;

    if (tokenIsValidOnSend) {
    } else if (tokenIsValidOnLiquidity) {
    } else {
      dispatch(
        tokenInputActions.changeSelectedToken({ token: {}, page: page })
      );
    }
  };
  useEffect(() => {
    checkTokenValid(props.page);
  }, [sourceNetwork, destinationNetwork, liquidityNetwork]);

  // styling
  const styles = {
    root: {
      pt: 1,
    },
    button: {
      width: "140px",
    },
    gridItem: {
      p: 1,
      justifyContent: "space-evenly",
    },
    typography: {
      ml: 1.5,
      fontSize: 13,
    },
  };

  return (
    <Fragment>
      <MKButton
        variant={selectedToken.name ? "outlined" : "outlined"}
        color="primary"
        onClick={toggleModal}
        sx={styles.button}
        disabled={props.page === "liquidity" && !liquidityNetwork.chainName}
      >
        {selectedToken.name ? (
          <Fragment>
            <MKAvatar src={selectedToken.logoURI} size="xs" />
            <Typography variant="inherit" sx={styles.typography}>
              {selectedToken.symbol}
            </Typography>
          </Fragment>
        ) : (
          "Select A Token"
        )}
      </MKButton>
      {modalToBeMounted && (
        <SimpleModal
          toggleModal={toggleModal}
          showModal={showModal}
          modalTitle="Select a Token"
          modalContent={
            <ModalContent
              tokens={filteredTokenList}
              onTokenSelect={tokenSelectHandler}
            />
          }
        />
      )}
    </Fragment>
  );
};

export default TokenSelector;

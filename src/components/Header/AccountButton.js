import React, { Fragment, useState } from "react";

// redux imports
import { useSelector } from "react-redux";

// Material Kit Imports
import MKBadge from "components/MKComponents/MKBadge";
import MKButton from "components/MKComponents/MKButton";

// Mui Imports
import { Grid, Typography } from "@mui/material";

// useDApp Imports
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

const AccountButton = (props) => {
  // error state
  const [activateError, setActivateError] = useState("");

  // modal state
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);

  // token state
  const selectedToken = useSelector(
    (state) => state.tokenInput.selectedToken.send
  );

  // account state
  const { activateBrowserWallet, account } = useEthers();
  const balance = useTokenBalance(selectedToken.address, account);
  const etherBalance = useEtherBalance(account);

  // action handlers
  const connectWalletHandler = async (event) => {
    activateBrowserWallet();
  };

  // styles
  const width = props.isSmallScreen ? 6 : 4;
  const styles = {
    root: {
      p: 1,
    },
    button: {
      width: 1,
      px: 1.5,
      maxWidth: 165,
    },
    typography: {
      overflow: "hidden",
    },
  };

  return (
    <Grid
      item
      display="flex"
      justifyContent="flex-end"
      xs={width}
      sx={styles.root}
    >
      {account ? (
        <Fragment>
          {balance && (
            <MKBadge
              badgeContent={`${
                balance && parseFloat(formatEther(balance)).toFixed(2)
              } ${selectedToken.symbol}`}
              variant="gradient"
              color="primary"
              container
            ></MKBadge>
          )}
          {account && (
            <Fragment>
              <MKButton
                variant="gradient"
                color="primary"
                onClick={toggleModal}
                sx={{ textTransform: "none" }}
              >{`${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}
          `}</MKButton>
              <SimpleModal
                toggleModal={toggleModal}
                showModal={showModal}
                modalTitle="Account"
                modalContent={<ModalContent />}
              />
            </Fragment>
          )}
        </Fragment>
      ) : (
        <MKButton
          variant="gradient"
          color="primary"
          sx={styles.button}
          onClick={connectWalletHandler}
        >
          <Typography variant="inherit" sx={styles.typography}>
            Connect A Wallet
          </Typography>
        </MKButton>
      )}
    </Grid>
  );
};

export default AccountButton;

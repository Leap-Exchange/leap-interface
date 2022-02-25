import React, { Fragment, useState } from "react";

// Material Kit Imports
import MKBadge from "components/MKBadge";
import MKButton from "components/MKButton";

// Mui Imports
import { Grid, Typography } from "@mui/material";

// useDApp Imports
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

// Custom Component Imports
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

const AccountButton = (props) => {
  const width = props.isSmallScreen ? 6 : 4;

  const [showModal, setShowModal] = useState(false);
  const [activateError, setActivateError] = useState("");
  const toggleModal = () => setShowModal((prevState) => !prevState);

  const { activateBrowserWallet, activate, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const connectWalletHandler = async (event) => {
    activateBrowserWallet();
  };

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
          {etherBalance && (
            <MKBadge
              badgeContent={`${
                etherBalance && parseFloat(formatEther(etherBalance)).toFixed(2)
              }
          
          ETH`}
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

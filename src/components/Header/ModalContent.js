import React, { Fragment } from "react";

// Material Kit Imports
import MKTypography from "components/MKComponents/MKTypography";
import MKButton from "components/MKComponents/MKButton";

// useDApp Imports
import { useEthers } from "@usedapp/core";

const ModalContent = (props) => {
  const { deactivate, account } = useEthers();

  const disconnectWalletHandler = (event) => {
    deactivate();
  };
  return (
    <Fragment>
      <MKTypography display="flex" fontWeight="bold" variant="button">
        Connected with metamask
      </MKTypography>
      <MKTypography
        variant="h5"
        color="dark.main"
        sx={{ m: 3 }}
      >{`${account.slice(0, 6)}...${account.slice(
        account.length - 4,
        account.length
      )}
          `}</MKTypography>
      <MKButton
        variant="gradient"
        color="primary"
        onClick={disconnectWalletHandler}
      >
        disconnect
      </MKButton>
    </Fragment>
  );
};

export default ModalContent;

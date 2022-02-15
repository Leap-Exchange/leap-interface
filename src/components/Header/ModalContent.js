import React, { Fragment } from "react";

// Material Kit Imports
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// useDApp Imports
import { useEthers } from "@usedapp/core";

const ModalContent = (props) => {
  const { activateBrowserWallet, account } = useEthers();
  return (
    <Fragment>
      <MKTypography display="flex" fontWeight="bold" variant="button">
        Connected with metamask
      </MKTypography>
      <MKTypography
        variant="h5"
        color="darm.main"
        sx={{ m: 3 }}
      >{`${account.slice(0, 6)}...${account.slice(
        account.length - 4,
        account.length
      )}
          `}</MKTypography>
    </Fragment>
  );
};

export default ModalContent;

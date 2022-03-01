import { useState, Fragment } from "react";

// Mui Imports
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

// Material Kit Imports
import MKBox from "components/MKComponents/MKBox";
import MKButton from "components/MKComponents/MKButton";
import MKTypography from "components/MKComponents/MKTypography";

const SimpleModal = (props) => {
  const {
    toggleModal,
    showModal,
    modalTitle,
    modalHeader,
    modalFooter,
    modalContent,
  } = props;
  return (
    <Fragment>
      <Modal
        open={showModal}
        onClose={toggleModal}
        sx={{ display: "grid", placeItems: "center" }}
        keepMounted
      >
        <Slide direction="down" in={showModal} timeout={500}>
          <MKBox
            position="relative"
            width={1}
            maxWidth="500px"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox
              display="flex"
              alginItems="center"
              justifyContent="space-between"
              p={2}
            >
              <MKTypography variant="h5">{modalTitle}</MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModal}
              />
            </MKBox>
            {modalHeader ? (
              <Fragment>
                <Divider sx={{ my: 0 }} />
                <MKBox p={2}>{modalHeader}</MKBox>
              </Fragment>
            ) : null}
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>{modalContent}</MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" p={1.5}>
              {modalFooter ? modalFooter : <MKButton>close</MKButton>}
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </Fragment>
  );
};

export default SimpleModal;

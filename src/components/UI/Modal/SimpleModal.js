import { useState, Fragment } from "react";

// @mui material components
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const SimpleModal = (props) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow((prevState) => !prevState);

  const { label, modalTitle, modalContent } = props;

  return (
    <Fragment>
      <MKButton variant="gradient" color="primary" onClick={toggleModal}>
        {label}
      </MKButton>
      <Modal
        open={show}
        onClose={toggleModal}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="500px"
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
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>{modalContent}</MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                close
              </MKButton>
              <MKButton variant="gradient" color="info">
                save changes
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </Fragment>
  );
};

export default SimpleModal;

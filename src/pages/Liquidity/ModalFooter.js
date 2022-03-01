import { Box } from "@mui/system";
import MKButton from "components/MKComponents/MKButton";

const ModalFooter = (prop) => {
  return (
    <Box display="flex" sx={{ width: "100%", justifyContent: "flex-end" }}>
      <MKButton variant="gradient" color="primary">
        Confirm
      </MKButton>
    </Box>
  );
};

export default ModalFooter;

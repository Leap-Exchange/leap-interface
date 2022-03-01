import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  Divider,
  Box,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Pagination,
  Grid,
  Checkbox,
  Input,
  OutlinedInput,
  Alert,
  AlertTitle,
  ListItemButton,
} from "@mui/material";

import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import MKTypography from "components/MKComponents/MKTypography";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputAdornment from "@mui/material/InputAdornment";
import MKBadge from "components/MKComponents/MKBadge";
import MKInput from "components/MKComponents/MKInput";
import MKBox from "components/MKComponents/MKBox";
import MKButton from "components/MKComponents/MKButton";
import SimpleModal from "components/UI/Modal/SimpleModal";
import ModalFooter from "./ModalFooter";

const ReceiptsList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const selectedToken = useSelector(
    (state) => state.tokenInput.selectedToken.liquidity
  );
  const [maxAmount, setMaxAmount] = useState("");
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(Math.ceil(receiptsList.length / itemsPerPage));
  const handleChange = (event, value) => {
    setPage(value);
  };

  const maxAmountHandler = (event) => {
    if (!isNaN(event.target.value)) {
      setMaxAmount(event.target.value);
    }
  };

  const handleListItemClick = (event, receipt, identifier) => {
    toggleModal();
  };

  return (
    <Grid sx={{ width: "100%", p: 3, justifyContent: "center" }}>
      <Box component="span" display="flex" sx={{ justifyContent: "flex-end" }}>
        <MKBox>
          {/* <Dropdown
            label={`max amount: ${maxAmount}`}
            outputOptions={[
              { name: "none", id: "" },
              { name: "date", id: "date" },
              { name: "price", id: "price" },
            ]}
            action={sortByHandler}
          /> */}
          <MKButton variant="outlined" iconOnly color="primary" sx={{ ml: 1 }}>
            <RefreshIcon fontSize="large" color="primary" />
          </MKButton>
        </MKBox>
      </Box>

      <Divider />
      {!selectedToken.name && (
        <Alert severity="warning" sx={{ my: 10 }}>
          <AlertTitle>No receipts to display!</AlertTitle>
          Please select a token and network
        </Alert>
      )}
      {selectedToken.name && (
        <List dense component="span" sx={{ bgcolor: "primary.main" }}>
          {receiptsList
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((receipt) => {
              const labelId = `list-secondary-label-${receipt.hash}`;
              return (
                <ListItem
                  key={receipt.hash}
                  button
                  onClick={() => console.log("")}
                  sx={{ justifyContent: "space-between" }}
                >
                  <ListItemButton
                    onClick={(event) =>
                      handleListItemClick(event, receipt, receipt.hash)
                    }
                  >
                    <ListItemText
                      id={labelId}
                      primary={`hash: ${receipt.hash.slice(
                        0,
                        8
                      )}...${receipt.hash.slice(
                        receipt.hash.length - 6,
                        receipt.hash.length
                      )}`}
                      secondary={`date: ${receipt.date}`}
                    />
                    <MKBadge
                      badgeContent={`${receipt.price} ${selectedToken.symbol}`}
                      variant="gradient"
                      color="primary"
                      container
                      max={10000000}
                    ></MKBadge>
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      )}
      <Divider />
      <Box component="span" display="flex" sx={{ justifyContent: "center" }}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="medium"
          showFirstButton
          showLastButton
        />
      </Box>
      <SimpleModal
        toggleModal={toggleModal}
        showModal={showModal}
        modalTitle="Confirm transaction"
        modalHeader={<ModalContent />}
        modalContent={<ModalContent />}
        modalFooter={<ModalFooter />}
      />
    </Grid>
  );
};

export default ReceiptsList;

const receiptsList = [
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
  { hash: "9174c8114b23d6a4b10d6e4d9396fecb", date: "", price: 2 },
  { hash: "17ce901a24a9c7a45e2883c6100e35a1", date: "", price: 20 },
  { hash: "cce80feed4b888c56abdbc85a83d48ba", date: "", price: 121 },
  { hash: "fbc093a5b35a55a14747773e0b7c5480", date: "", price: 0.11 },
  { hash: "e1fb3a126e29a2358bc48186248af88f", date: "", price: 0.1 },
  { hash: "63ec397ff5c1f2a9b6721bc4eb448117", date: "", price: 3.5 },
  { hash: "7bb82f1b4defc312a502d982013945b1", date: "", price: 6 },
  { hash: "272391975e001d512147b9a6a200de0f", date: "", price: 20.3 },
];

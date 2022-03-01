import { useState, Fragment } from "react";

// Material Kit imports
import MKButton from "components/MKComponents/MKButton";

// @mui material components
import { Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const { outputOptions, label, action } = props;

  const actionHandler = (event, index, option) => {
    setSelectedIndex(index);
    closeDropdown();
    action(event, option);
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
        variant="outlined"
        color="primary"
        onClick={openDropdown}
        sx={{ overflow: "hidden" }}
      >
        {label}
        <ExpandMoreIcon sx={dropdownIconStyles} />
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        {outputOptions.map((option, index) => (
          <MenuItem
            key={option.id}
            onClick={(event) => actionHandler(event, index, option)}
            selected={index === selectedIndex}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Dropdown;

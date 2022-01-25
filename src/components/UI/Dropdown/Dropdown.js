import { useState, Fragment } from "react";

// Material Kit imports
import MKButton from "components/MKButton";

// @mui material components
import { Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const outputLabels = props.outputs.labels;
  const label = props.label;

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
      <MKButton variant="gradient" color="primary" onClick={openDropdown}>
        {label}
        <ExpandMoreIcon sx={dropdownIconStyles} />
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        {outputLabels.map((label) => (
          <MenuItem onClick={closeDropdown}>{label}</MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Dropdown;

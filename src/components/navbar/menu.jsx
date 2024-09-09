import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { NavbarButton } from "../../styles/navbarStyle";
import SortIcon from "@mui/icons-material/Sort";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavbarMenu({ clickSound }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    clickSound();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <NavbarButton
        $BgColor
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SortIcon />
      </NavbarButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <a
          href="./MyResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Resume
          </MenuItem>
        </a>
        <Divider sx={{ my: 0.5 }} />
        <a 
        href="mailto:richman.uzb1676@mail.ru"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black" }}>
        <MenuItem onClick={handleClose} disableRipple>
          <AlternateEmailIcon />
           Email
        </MenuItem>
        </a>
        <a
          href="https://t.me/khamidjonov_r"
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuItem onClick={handleClose} disableRipple>
            <SendOutlinedIcon />
            Telegram
          </MenuItem>
        </a>
        <a
          href="tel:+8210-5860-7017"
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuItem onClick={handleClose} disableRipple>
            <CallIcon />
            Call
          </MenuItem>
        </a>
      </StyledMenu>
    </div>
  );
}

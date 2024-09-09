import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  ModalPageName,
  ModalPageNamesWrapper,
  ModalWrapper,
  NavbarButton,
  SearchAndInputWrapper,
  SearchIconWrapper,
} from "../../styles/navbarStyle";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from 'react-scroll'; // Import Link from react-scroll
import playSound from "../sounds/playSound";
import clickSound from '../sounds/click.wav'
import menuSound from '../sounds/menuSound2.mp3'

export default function SearchComponent() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
    playSound(menuSound);
  };
  const handleClose = () => {
    setOpen(false)
    playSound(clickSound);
  };

  return (
    <div>
      <NavbarButton $ColorBlue onClick={handleOpen}>
        <SearchIcon />
      </NavbarButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 200,
          },
        }}
        sx={{ padding: "0px 30px"}}
      >
        <Fade in={open}>
          <ModalWrapper>
            <SearchAndInputWrapper>
              <SearchIconWrapper>
                {" "}
                <SearchIcon
                  style={{ fontSize: "40px", marginBottom: "-5px" }}
                />
              </SearchIconWrapper>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                sx={{ width: "100%", }}
              />
            </SearchAndInputWrapper>
            <hr style={{ margin: "20px 0px" }} />
            <ModalPageNamesWrapper>
              <Link to="home" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>Home</ModalPageName>
              </Link>
              <Link to="projects" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>Projects</ModalPageName>
              </Link>
              <Link to="about" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>About</ModalPageName>
              </Link>
              <Link to="journey" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>Journey</ModalPageName>
              </Link>
              <Link to="contact" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>Contact</ModalPageName>
              </Link>
              <Link to="others" smooth={true} duration={700} offset={0} spy={true} activeClass="active">
                <ModalPageName onClick={handleClose}>Others</ModalPageName>
              </Link>
           </ModalPageNamesWrapper>
          </ModalWrapper>
        </Fade>
      </Modal>
    </div>
  );
}
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


export default function SearchComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        sx={{ padding: "0px 30px", }}
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
              <ModalPageName>Home</ModalPageName>
              <ModalPageName>Blog</ModalPageName>
              <ModalPageName>Projects</ModalPageName>
              <ModalPageName>About</ModalPageName>
              <ModalPageName>Journey</ModalPageName>
              <ModalPageName>Contact</ModalPageName>
              <ModalPageName>Others</ModalPageName>
            </ModalPageNamesWrapper>
          </ModalWrapper>
        </Fade>
      </Modal>
    </div>
  );
}

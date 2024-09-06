import React, { useState } from "react";
import {
  NavbarButton,
  NavbarButtonWrapper,
  NavbarContainer,
  NavbarLeftWrapper,
  NavbarRightWrapper,
} from "../../styles/navbarStyle";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Typewriter from "typewriter-effect";
import NavbarMenu from "./menu";
import SearchComponent from "./search";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarLeftWrapper>
        <h2>
          ~/
          <Typewriter
            options={{
              strings: [""],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </NavbarLeftWrapper>
      <NavbarRightWrapper>
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>Home</p>
        </a>
        <a href="#blog" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>Blog</p>
        </a>
        <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>Projects</p>
        </a>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>About</p>
        </a>
        <a href="#journey" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>Journey</p>
        </a>
        <NavbarButtonWrapper>
          <>
            <SearchComponent />
          </>
          <NavbarButton $ColorYellow>
            <Brightness3Icon />
          </NavbarButton>
          <>
            <NavbarMenu />
          </>
        </NavbarButtonWrapper>
      </NavbarRightWrapper>
    </NavbarContainer>
  );
};

export default NavbarComponent;

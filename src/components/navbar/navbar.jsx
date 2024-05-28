import React from "react";
import {
  NavbarButton,
  NavbarButtonWrapper,
  NavbarContainer,
  NavbarLeftWrapper,
  NavbarRightWrapper,
} from "../../styles/navbarStyle";
// import SearchIcon from "@mui/icons-material/Search";
// import SortIcon from "@mui/icons-material/Sort";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Typewriter from "typewriter-effect";
import NavbarMenu from "./menu";
import SearchComponent from "./search";

const NavbarComponent = () => {
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
        <p>Home</p>
        <p>Blog</p>
        <p>Projects</p>
        <p>About</p>
        <p>Journey</p>
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

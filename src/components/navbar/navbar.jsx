import React, { useState } from 'react';
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
import { Link } from 'react-scroll';
import playSound from "../sounds/playSound";
import clickSound from '../sounds/click.wav'
import switchSound from '../sounds/switchSound.mp3'

const NavbarComponent = () => {
  const [rotated, setRotated] = useState(false);

  const handleClick =()=>{
    playSound(clickSound)
  }
  const handleSwitch =()=>{
    playSound(switchSound)
    setRotated(!rotated);
  }

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
      <Link to="projects" smooth={true} duration={1000} offset={0} onClick={handleClick}>
        <p>Projects</p>
      </Link>
      <Link to="about" smooth={true} duration={1000} offset={0} onClick={handleClick}>
        <p>About</p>
      </Link>
      <Link to="experience" smooth={true} duration={1000} offset={0} onClick={handleClick}>
        <p>Experience</p>
      </Link>
      <Link to="journey" smooth={true} duration={1000} offset={0} onClick={handleClick}>
        <p>Journey</p>
      </Link>
        <NavbarButtonWrapper>
          <SearchComponent/>
          <NavbarButton $ColorChange onClick={handleSwitch} rotated={rotated}>
            <Brightness3Icon />
          </NavbarButton>
          <NavbarMenu clickSound ={handleClick}/>
        </NavbarButtonWrapper>
      </NavbarRightWrapper>
    </NavbarContainer>
  );
};

export default NavbarComponent;

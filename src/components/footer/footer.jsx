import React from "react";
import { FooterContainer, FooterText } from "../../styles/footerStyle";

const FooterComponent = () => {
  return (
    <FooterContainer>
   <FooterText> <span>Khamidjonov Rakhmatullo</span> © 2024 • Have a good day ! <span>• Contact</span></FooterText>
   <FooterText $hiddenText> <span>Khamidjonov Rakhmatullo  © 2024</span></FooterText>
    </FooterContainer>
  );
};

export default FooterComponent;

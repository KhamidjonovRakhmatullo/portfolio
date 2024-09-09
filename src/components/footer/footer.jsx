import React from "react";
import { FooterContainer, FooterText } from "../../styles/footerStyle";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterText>
        {" "}
        <span>Khamidjonov Rakhmatullo</span> © 2024 • Have a good day !
        <a
          href="mailto:richman.uzb1676@mail.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span>• Contact</span>
        </a>
      </FooterText>
      <FooterText $hiddenText>
        {" "}
        <span>Khamidjonov Rakhmatullo © 2024</span>
      </FooterText>
    </FooterContainer>
  );
};

export default FooterComponent;

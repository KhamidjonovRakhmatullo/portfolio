import React from "react";
import {
  AboutContainer,
  AboutInfosWrapper,
  AboutLeftWrapper,
  AboutRightWrapper,
  ContactTelegram,
} from "../../styles/aboutStyle";
import me from "../../assets/Rakhmatullo.jpg";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const AboutComponent = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      {/* <DeviderLine style={{marginTop: "0px", marginBottom: "40px"}} /> */}
      <AboutInfosWrapper>
        <AboutLeftWrapper>
          <img src={me} alt="My Photo" />
          <h3>Khamidjonov Rakhamtullo</h3>
          <p>Full-Stack Developer</p>
          <p>BE CODER</p>
          <ContactTelegram>
            <SendOutlinedIcon />
            Contact
          </ContactTelegram>
        </AboutLeftWrapper>
        <AboutRightWrapper>
          <p>
            Dedicated Web Developer with a solid foundation in JavaScript,
            TypeScript, and React, complemented by practical experience in
            backend technologies such as Node/Express and both SQL/NoSQL
            databases..
          </p>
          <p>
            My professional journey is characterized by a commitment to creating
            intuitive, user-centric front-end applications, supported by a
            thorough understanding of backend integrations. I prioritize
            high-quality, maintainable code and excel in navigating complex
            problem-solving scenarios.
          </p>
          <p>
            Committed to continuous improvement, I stay updated with the latest
            web development trends and technologies, aiming to keep my skills
            sharp and relevant. I am keen to contribute my expertise to dynamic
            teams, driving innovative projects forward and pursuing further
            professional development.
          </p>
        </AboutRightWrapper>
      </AboutInfosWrapper>
    </AboutContainer>
  );
};

export default AboutComponent;

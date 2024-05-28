import React from "react";
import {
  HomeContainer,
  HomeLeftWrapper,
  HomeRightWrapper,
  MainContainer,
} from "../../styles/homeStyle";
import me from "../../assets/Rakhmatullo.jpg";
import AboutComponent from "../about/about";
import ExperiencesComponent from "../experinces/experiences";
import JourneyComponent from "../journey/journey";
import ProjectsComponent from "../projects/projects";
import FooterComponent from "../footer/footer";

const HomeComponent = () => {
  return (
    <MainContainer>
      <HomeContainer>
        <HomeLeftWrapper>
          <h1>
            I'm <span>Rakhmatullo</span>, a curious software developer who's
            trying to get a bit better every day
          </h1>
          <p>
            This is my place for <span>thoughts</span>, <span>reflections</span>
            , & <span>everything</span> in between
          </p>
        </HomeLeftWrapper>
        <HomeRightWrapper>
          <img src={me} alt="my photo" />
        </HomeRightWrapper>
      </HomeContainer>
      <ProjectsComponent/>
      <AboutComponent />
      <ExperiencesComponent />
      <JourneyComponent />
      <FooterComponent/>
    </MainContainer>
  );
};

export default HomeComponent;

import React, { useEffect } from "react";
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
import { annotate,  } from 'rough-notation';

const annotateElements = (elements) => {
  elements.forEach(({ id, type, color }) => {
    const element = document.getElementById(id);
    if (element) {
      const annotation = annotate(element, { type, color });
      annotation.show();
    } else {
      console.warn(`Element with ID '${id}' not found`);
    }
  });
};

const HomeComponent = () => {

useEffect(() => {
    const elementsToAnnotate = [
      { id: "Underline1", type: "underline", color: "yellow" },
      { id: "Underline2", type: "underline", color: "rgb(30 144 255)" },
      { id: "Underline3", type: "underline", color: "red" }
    ];
    annotateElements(elementsToAnnotate);
  }, []);
  //


  return (
    <MainContainer>
      <HomeContainer>
        <HomeLeftWrapper>
          <h1>
            I'm <span>Rakhmatullo</span>, a curious software developer who's
            trying to get a bit better every day
          </h1>
          <p>
            This is my place for <span id="Underline1">thoughts</span>, <span id="Underline2">reflections</span>,
            & <span id="Underline3">everything</span> in between
          </p>
        </HomeLeftWrapper>
        <HomeRightWrapper>
          <img src={me} alt="my" />
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

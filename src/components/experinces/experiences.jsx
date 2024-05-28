import React from "react";
import {
  ExperiencesContainer,
  ExperiencesTitle,
  LIList,
} from "../../styles/experinces";

const ExperiencesComponent = () => {
  return (
    <ExperiencesContainer>
      <h1>Experiences</h1>
      <ExperiencesTitle>
        <h2>
          Full-Stack Developer @{" "}
          <span style={{ color: "rgb(30 144 255)", fontWeight: "500" }}>
            BeCoder
          </span>
        </h2>
        <p>January 2024 - Present</p>
      </ExperiencesTitle>
      <div>
        <LIList>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
          perferendis. Perferendis, error? Id.
        </LIList>
        <LIList>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
          soluta eos, odio sapiente laborum tempore quos quo nihil aliquam.
          Illum nihil, sint totam, laudantium consequuntur aliquam cum modi
          corporis, ea nisi incidunt?
        </LIList>
        <LIList>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eos tempora quo, in pariatur tenetur sed similique provident sint
          ullam. Dolores mollitia nemo dignissimos nesciunt.
        </LIList>
      </div>
    </ExperiencesContainer>
  );
};

export default ExperiencesComponent;

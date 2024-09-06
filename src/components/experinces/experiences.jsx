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
        Freelance @{" "}
        <span style={{ color: "rgb(30 144 255)", fontWeight: "500" }}>
          BeCoder
        </span>
      </h2>
      <p>May 2024 - Present</p>
    </ExperiencesTitle>
    <div>
      <LIList>
        Spearheaded the development and deployment of web applications, both front-end and back-end, using contemporary tools and frameworks, ensuring the delivery of seamless and high-quality solutions.
      </LIList>
      <LIList>
        <strong>Front-End:</strong> Designed and implemented responsive user interfaces with JavaScript, ReactJS, Hooks, styled-components, and integrated a variety of over 10 open-source libraries.
      </LIList>
      <LIList>
        <strong>Back-End:</strong> Engineered server-side solutions using Node.js, Express.js, and Mongoose for MongoDB, with security features like bcrypt for password encryption and JSON Web Tokens for secure authentication.
      </LIList>
      <LIList>
        <strong>Cloud:</strong> Orchestrated the deployment and management of applications utilizing TimeWeb S3 cloud services.
      </LIList>
      <LIList>
        <strong>DevOps:</strong> Oversaw domain management with Ahost.uz, set up SSH for secure connections, managed web servers with Nginx, and employed PM2 for application process management and monitoring.
      </LIList>
      <LIList>
        <strong>Contact:</strong> Reach out to Muhammad Bekzod at +82 10-5931-6057.
      </LIList>
    </div>
  </ExperiencesContainer>
  
  );
};

export default ExperiencesComponent;

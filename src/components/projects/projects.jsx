import React from "react";
import {
  DeviderLine,
  GitHubAndNetlifyIconsWrapper,
  ProjectBox,
  ProjectBoxIconWrapper,
  ProjectsContainer,
  ProjectsTitle,
  TitleOfContainer,
} from "../../styles/projects";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import github1 from "../../assets/github.svg";

const ProjectsComponent = () => {
  return (
    <>
      <ProjectsTitle>
        <TitleOfContainer $MarginBottom10px>Projects</TitleOfContainer>
        <p>Some of the projects I've build or been a part of.</p>
        <DeviderLine />
      </ProjectsTitle>
      <ProjectsContainer>
        <ProjectBox>
          <ProjectBoxIconWrapper>
            <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px" }} />
            <GitHubAndNetlifyIconsWrapper>
            <a href="https://camping-car.netlify.app"> <OpenInNewOutlinedIcon sx={{ cursor: "pointer" }} /></a>
             <a href="https://github.com/KhamidjonovRakhmatullo/camping-car"><img
                src={github1}
                alt="github"
                style={{
                  maxWidth: "25px",
                  cursor: "pointer",
                }}
              /></a> 
            
            </GitHubAndNetlifyIconsWrapper>
          </ProjectBoxIconWrapper>
          <h2>Camper</h2>
          <p $marginBottom>
            Camper is a MERN stack (React.js, Node.js)
            project with Ant Design UI, facilitating motorhome and van rentals.
            Empowering travelers with seamless booking and management.
          </p>
          <p $rang2>JavaScript • ReactJs • MUI</p>
        </ProjectBox>
        <ProjectBox>
          <ProjectBoxIconWrapper>
              <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px" }} />
            <GitHubAndNetlifyIconsWrapper>
                <OpenInNewOutlinedIcon sx={{ cursor: "pointer" }} />
              <img
                src={github1}
                alt="github"
                style={{
                  maxWidth: "25px",
                  cursor: "pointer",
                }}
              />
            </GitHubAndNetlifyIconsWrapper>
          </ProjectBoxIconWrapper>
          <h2>Camper</h2>
          <p $marginBottom>
            Camper is a MERN stack (React.js, Node.js)
            project with Ant Design UI, facilitating motorhome and van rentals.
            Empowering travelers with seamless booking and management.
          </p>
          <p $rang2>JavaScript • ReactJs • MUI</p>
        </ProjectBox>
        <ProjectBox>
          <ProjectBoxIconWrapper>
              <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px" }} />
            <GitHubAndNetlifyIconsWrapper>
                <OpenInNewOutlinedIcon sx={{ cursor: "pointer" }} />
              <img
                src={github1}
                alt="github"
                style={{
                  maxWidth: "25px",
                  cursor: "pointer",
                }}
              />
            </GitHubAndNetlifyIconsWrapper>
          </ProjectBoxIconWrapper>
          <h2>Camper</h2>
          <p $marginBottom>
            Camper is a MERN stack (React.js, Node.js)
            project with Ant Design UI, facilitating motorhome and van rentals.
            Empowering travelers with seamless booking and management.
          </p>
          <p $rang2>JavaScript • ReactJs • MUI</p>
        </ProjectBox>
        <ProjectBox>
          <ProjectBoxIconWrapper>
              <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px",}} />
            <GitHubAndNetlifyIconsWrapper>
                <OpenInNewOutlinedIcon sx={{ cursor: "pointer" }} />
              <img
                src={github1}
                alt="github"
                style={{
                  maxWidth: "25px",
                  cursor: "pointer",
                }}
              />
            </GitHubAndNetlifyIconsWrapper>
          </ProjectBoxIconWrapper>
          <h2>Camper</h2>
          <p $marginBottom>
            Camper is a MERN stack (React.js, Node.js)
            project with Ant Design UI, facilitating motorhome and van rentals.
            Empowering travelers with seamless booking and management.
          </p>
          <p $rang2>JavaScript • ReactJs • MUI</p>
        </ProjectBox>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsComponent;

import React from "react";
import {
  Desc,
  DeviderLine,
  GitHubAndNetlifyIconsWrapper,
  ProjectBox,
  ProjectBoxIconWrapper,
  ProjectName,
  ProjectsContainer,
  ProjectsTitle,
  Stacks,
  TitleOfContainer,
} from "../../styles/projects";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import github1 from "../../assets/github.svg";
import { data } from "./data";
import { Element } from "react-scroll";

const ProjectsComponent = () => {
  const mockdata = data;
  return (
    <Element name="projects" className="element">
      <ProjectsTitle>
        <TitleOfContainer $MarginBottom10px>Projects</TitleOfContainer>
        <p>Some of the projects I've build or been a part of.</p>
        <DeviderLine />
      </ProjectsTitle>
      {/* <div style={{display: "flex", justifyContent: 'center'}}> */}
      <ProjectsContainer>
        {mockdata.map((value, key) => {
          return (
            <ProjectBox key={key}>
              <ProjectBoxIconWrapper>
                <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px" }} />
                <GitHubAndNetlifyIconsWrapper>
                  <a
                    href={value.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <OpenInNewOutlinedIcon
                      sx={{ cursor: "pointer", color: "black" }}
                    />
                  </a>
                  <a
                    href={value.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github1}
                      alt="github"
                      style={{
                        maxWidth: "25px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </GitHubAndNetlifyIconsWrapper>
              </ProjectBoxIconWrapper>
              <ProjectName>{value.name}</ProjectName>
              <Desc>{value.description}</Desc>
              <Stacks>{value.stacks}</Stacks>
            </ProjectBox>
          );
        })}
      </ProjectsContainer>
      {/* </div> */}
    </Element>
  );
};

export default ProjectsComponent;

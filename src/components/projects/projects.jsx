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

const ProjectsComponent = () => {
  const mockdata = data
  return (
    <>
      <ProjectsTitle>
        <TitleOfContainer $MarginBottom10px>Projects</TitleOfContainer>
        <p>Some of the projects I've build or been a part of.</p>
        <DeviderLine />
      </ProjectsTitle>
      {/* <div style={{display: "flex", justifyContent: 'center'}}> */}
        <ProjectsContainer>
          {mockdata.map((value, key)=>{
            return(
              <ProjectBox key={key}>
              <ProjectBoxIconWrapper>
                <FolderOutlinedIcon color="primary" sx={{ fontSize: "45px" }} />
                <GitHubAndNetlifyIconsWrapper>
                <a href={value.projectLink}> <OpenInNewOutlinedIcon sx={{ cursor: "pointer", color: "black" }} /></a>
                 <a href={value.gitHubLink}><img
                    src={github1}
                    alt="github"
                    style={{
                      maxWidth: "25px",
                      cursor: "pointer",
                    }}
                  /></a>
        
                </GitHubAndNetlifyIconsWrapper>
              </ProjectBoxIconWrapper>
              <ProjectName>{value.name}</ProjectName>
              <Desc>{value.description}</Desc>
              <Stacks>{value.stacks}</Stacks>
            </ProjectBox>
            )
          })}
        </ProjectsContainer>
      {/* </div> */}
    </>
  );
};

export default ProjectsComponent;

import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';

export const StyledGitHubIcon = styled(GitHubIcon)`
text-decoration: none;
  &:hover {
    color: #1976d2;
  }
`;

export const ProjectsTitle = styled.div`
  padding: 24px 0px 32px 0px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: start;
  p {
    color: rgb(115 115 115);
    line-height: 1.75rem;
    font-size: 1.325rem;
  }
  @media only screen and (max-width: 500px) {
    p {
      color: rgb(115 115 115);
      line-height: 1.75rem;
      font-size: 1.125rem;
    }
  }
`;

export const TitleOfContainer = styled.h1`
  font-size: 2.75rem;
  line-height: 1.5rem;
  color: rgb(15 23 42);
  letter-spacing: -0.025em;
  font-weight: 800;
  margin: 0px;
  margin-bottom: ${(props) => (props.$MarginBottom10px ? `10px` : ``)};

  @media only screen and (max-width: 900px) {
    line-height: 1.7rem;
    font-weight: 600;
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 500px) {
    letter-spacing: -0.025em;
    line-height: 1.4rem;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

export const DeviderLine = styled.div`
  border: 0.8px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProjectsContainer = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ProjectBox = styled.div`
  /* border: 1px solid rgb(163 163 163); */
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 496px;
  padding: 24px;
  border-radius: 5px;
  /* position: relative; */

  transition: 0.3s;
  &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    border: 1px solid rgb(163 163 163);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 14px;
  }
`;
export const ProjectName = styled.h2`
  /* border: 1px solid green; */
  letter-spacing: -0.025em;
  line-height: 2rem;
  font-weight: 700;
  font-size: 2.1rem;
  margin-bottom: 0.75rem;
  margin: 10px 0px 8px 0px;
  @media only screen and (max-width: 500px) {
    letter-spacing: -0.025em;
    line-height: 1.7rem;
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
    margin: 7px 0px 6px 0px;
  }
`;
export const Desc = styled.div`
  /* border: 1px solid red; */
  color: rgb(115 115 115);
  font-size: 1.2rem;
  line-height: 1.75;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.75;
    margin-top: 8px;
  }
`;
export const Stacks = styled.div`
 color: rgb(163, 163, 163);
  font-size: 1.1rem;
  line-height: 1.75;
  /* border: 1px solid blue; */
  /* position: absolute; */
  bottom: 24px; /* Space from the bottom */

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    margin-top: 8px;
  }
`;

export const ProjectBoxIconWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px;
  height: 40px;
  margin-bottom: 3px;
`;

export const GitHubAndNetlifyIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

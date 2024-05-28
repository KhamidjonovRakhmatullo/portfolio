import styled from "styled-components";

export const JourneyContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 80px 0px 100px 0px;
  h1 {
    font-size: 3.75rem;
    line-height: 1.5rem;
    color: rgb(15 23 42);
    letter-spacing: -0.025em;
    font-weight: 800;
    margin: 0px;
    margin-bottom: 40px;
  }
  p {
    /* padding: 10px 0px; */
    letter-spacing: 0.025em;
    font-weight: 300;
    margin: 0px;
    color: rgb(115 115 115);
    line-height: 1.75rem;
    font-size: 1.325rem;
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      line-height: 1.35rem;
      font-size: 1.125rem;
    }
  }
`;

export const JourneyInfosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  margin-top: 48px;
  @media only screen and (max-width: 500px) {
    margin-top: 28px;
  }
`;
export const JourneyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  transition: 0.3s;
  &:hover {
    background-color: rgb(242, 248, 255);
    transform: scale(1.01);
    transition: 0.5s ease;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  color: red;
`;

export const TitleJob = styled.div`
  font-size: 1.195rem;
  line-height: 1.25rem;
  color: rgb(63 63 63);
  letter-spacing: 0.025em;
  font-weight: 550;
  margin: 0px;
  @media only screen and (max-width: 500px) {
    font-size: 1.090rem;
  }
`;

export const StyledSpan = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  font-size: 1.325rem;
  color: rgb(100 100 100);
  border-bottom: 3px solid #1e90ff;
  &:hover {
    background-color: #1e90ff;
    color: white;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
    cursor: pointer;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.090rem;
  }
`;

export const DataText = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${(props) =>
    props.$Color115 ? `rgb(115 115 115)` : `rgb(163 163 163)`};
  letter-spacing: 0.015em;
  font-weight: 400;
  margin: 0px;
  @media only screen and (max-width: 500px) {
    font-size: 0.900rem;
    line-height: 1.15rem;
  }
`;

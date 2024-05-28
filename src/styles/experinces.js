import styled from "styled-components";

export const ExperiencesContainer = styled.div`
  /* border: 1px solid red; */
  /* padding: 0px 13%; */
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 100px 0px 20px 0px;
  h1 {
    font-size: 3.75rem;
    line-height: 1.5rem;
    color: rgb(15 23 42);
    letter-spacing: -0.025em;
    font-weight: 800;
    margin: 0px;
    margin-bottom: 80px;
    @media only screen and (max-width: 900px) {
        font-size: 3rem;
        margin-bottom: 40px;
  }
    @media only screen and (max-width: 500px) {
        font-size: 2.2rem;
  }
  }
`;

export const ExperiencesTitle =styled.div`
/* border: 1px solid red; */
margin-bottom: 10px;
h2{
    font-size: 1.75rem;
    line-height: 1.5rem;
    color: rgb(115 115 115);
    letter-spacing: -0.025em;
    font-weight: 300;
    margin: 0px;
    @media only screen and (max-width: 900px) {
        font-size: 1.35rem;
        line-height: 1.2rem;
        letter-spacing: -0.015em;
        font-weight: 300;
  }
}
p{
    padding: 10px 0px;
    font-size: 1.175rem;
    line-height: 1.25rem;
    color: rgb(163 163 163);
    letter-spacing: 0.065em;
    font-weight: 300;
    margin: 0px;
}
`

export const LIList = styled.li`
    font-size: 1.175rem;
    line-height: 1.25rem;
    color: rgb(115 115 115);
    letter-spacing: 0.025em;
    font-weight: 300;
    margin: 0px;
    margin-bottom: 12px;
`
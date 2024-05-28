import styled from "styled-components";

export const MainContainer = styled.div`
   padding: 0px 12%;
   max-width: 1100px;
   display: flex;
   flex-direction: column;
   margin: auto;
  @media only screen and (max-width: 900px) {
    padding: 0px 8%;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 4%;
  }
`;
export const HomeContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const HomeLeftWrapper = styled.div`
  flex: 3;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-size: 3.75rem;
    line-height: 3.5rem;
    color: rgb(15 23 42);
    letter-spacing: -0.025em;
    font-weight: 800;
    margin: 20px 0px 0px 0px;
  }
  span {
    color: rgb(30 144 255);
  }
  p {
    color: rgb(71 85 105);
    line-height: 1.75rem;
    font-size: 1.525rem;
  }
  @media only screen and (max-width: 900px) {
    h1{
      font-size: 2.85rem;
      line-height: 3rem;
      letter-spacing: -0.018em;
      font-weight: 600;
    }
    p {
    color: rgb(71 85 105);
    line-height: 1.35rem;
    font-size: 1.325rem;
  }
    }
  @media only screen and (max-width: 500px) {
    h1{
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: -0.018em;
      font-weight: 600;
    }
    p {
    color: rgb(71 85 105);
    line-height: 1rem;
    font-size: 1.125rem;
  }
    }
`;
export const HomeRightWrapper = styled.div`
  /* flex: 1.3; */
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 200px;
    min-width: 150px;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition-duration: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    &:hover {
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0.2s;
      transition-property: all;
      border: none;
      border-radius: 0%;
      box-shadow: none;
      border: 1px solid #fff;
    }
  }
`;

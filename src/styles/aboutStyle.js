import styled from "styled-components";

export const AboutContainer = styled.div`
  /* border: 1px solid red; */ 
  /* padding: 0px 13%; */
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 100px 0px 0px 0px;
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

export const AboutInfosWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const AboutLeftWrapper = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 100px;
    border: 0.7px solid rgba(0, 0, 0, 0.2);
    transition-duration: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    &:hover {
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0.2s;
      border: none;
      border: 0.7px solid #fff;
      border-radius: 0%;
      box-shadow: none;
    }
  }

  h3 {
    /* border: 1px solid red; */
    text-align: center;
    color: rgb(0 0 0);
    letter-spacing: -0.025em;
    line-height: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    margin: 0px;
  }
  p {
    color: rgb(115 115 115);
    font-size: 1rem;
    line-height: inherit;
    color-scheme: light;
    margin: 2px;
  }
`;

export const ContactTelegram = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 6px 15px;
  border-radius: 20px;
  margin-top: 12px;
  border: 0.7px solid black;
  transition: 300ms;
  &:hover {
    background-color: rgb(29 161 242);
    border: 0.7px solid rgb(29 161 242);
    transition: 300ms;
    color: white;
  }
`;

export const AboutRightWrapper = styled.div`
  /* border: 1px solid black; */
  flex: 2.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #404040;
    color-scheme: light;
    opacity: 0.8;
  }
  @media only screen and (max-width: 500px) {
    p {
    font-size: 1rem;
    line-height: 1.75rem;
    color: #404040;
    color-scheme: light;
    opacity: 0.8;
  }
  }
`;

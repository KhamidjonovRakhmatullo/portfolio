import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const FooterText = styled.div`
  display: ${(props) => props.$hiddenText ? `none`: "flex"};
  gap:5px;
  line-height: 1.25rem;
  color: rgb(115 115 115);
  letter-spacing: 0.025em;
  font-weight: 300;
  margin: 0px;
  span {
    border-bottom: 2px solid #fff;
    cursor: pointer;

    transition: 0.5s;
    &:hover {
      transition: 0.5s ease;
      border-bottom: 2px solid #64ffda;
      
    }
  }
  @media only screen and (max-width: 900px) {
  display: ${(props) => props.$hiddenText ? `flex`: "none"};
    
  }
`;

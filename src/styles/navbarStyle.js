import styled, { css } from 'styled-components';

export const NavbarContainer = styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 6px 12%;
  @media only screen and (max-width: 900px) {
    padding: 0px 8%;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 4%;
  }
`
export const NavbarLeftWrapper = styled.div`
flex: 1;
/* border: 1px solid blue; */
display: flex;
justify-content: start;
align-items: center;

h2{
  display: flex;
  gap: 3px;
    color: rgb(30 144 255);
}
`
export const NavbarRightWrapper = styled.div`
flex: 1;
/* border: 1px solid green; */
display: flex;
justify-content: end;
align-items: center;
width: 100%;
gap: 20px;
p{
    color: rgb(23 23 23);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;

background-color: #fff;
padding: 10px 12px 5px 12px;
border-bottom: 2px solid #fff;
 
transition: 600ms;
&:hover{
   background-color: #e5e5e5;
   padding: 10px 12px 5px 12px;
   border-bottom: 2px solid #64ffda;
   border-radius: 5px 5px 0px 0px;
   transition: 200ms;
}
  @media only screen and (max-width: 900px) {
    display: none;
  }
}
`
export const NavbarButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
/* border: 1px solid red; */
`
export const NavbarButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
border-radius: 100px;

background-color: #e5e5e5;
border: 1px solid #e5e5e5;
transition: 500ms;

  ${(props) =>
    props.rotated &&
    css`
      transform: rotate(360deg);
      transition: transform 0.5s ease-in-out;
      color: ${(props)=> props.$ColorChange ? ` #F5F5F5` : ``};
    `}
&:hover{
    transition: 200ms;
    border: ${(props) => props.$BgColor ? `1px solid #64ffda` : `1px solid black`} ;
    color: ${(props)=> props.$ColorBlue ? `rgb(30 144 255)` : ``};
}
`


export const ModalWrapper = styled.div`
position: absolute;
top: 45%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
max-width: 576px;
background-color: #fafafa;
padding: 10px 0px 16px 0px;
background-color: #e5e5e5;
border-radius: .75rem;
/* border: 1px solid red; */

`

export const SearchAndInputWrapper =styled.div`
display: flex;
justify-content: center;
align-items: end;
gap: 10px;
padding: 0px 16px;
@media only screen and (max-width: 500px) {
  padding-left: 30px;
}
`
export const SearchIconWrapper =styled.div`
display: flex;
@media only screen and (max-width: 500px) {
  display: none;
}
`

export const ModalPageNamesWrapper =styled.div`
/* border: 1px solid red; */
p{
  padding: 20px;
  border: 1px solid green;
}
`
export const ModalPageName =styled.div`
  padding: 12px 0px 12px 60px ;
  color: rgb(23 23 23);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  &:hover{
     background-color: #fafafa;
  }
  @media only screen and (max-width: 500px) {
 padding-left: 30px;
}
`
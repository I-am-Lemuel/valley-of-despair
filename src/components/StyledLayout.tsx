import styled from "styled-components";
import { footerHeight } from "./Footer/StyledFooter";


const StyledLayout = styled.div`

  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  width: 100%;
  background-color: white;
  color: black;

  a {
    text-decoration: none;
  }

  button {
    border-radius: 10px;
  }
`
export const StyledContent = styled.div`
  min-height: calc(100vh - ${ footerHeight });
  margin-left: 10px;

  > a > button {
    width: 80px;
    height: 60px;
    word-wrap: normal;
    margin: 10px auto;
    background: white;
    color: white;
    border: none;
  }

  @media only screen and (max-width: 768px) {

    margin-left: 0;

    h1 {
      margin: 0;
    }
  }
`
export default StyledLayout
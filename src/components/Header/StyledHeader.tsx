import styled, { css } from "styled-components";

interface Props {
    toggle?: boolean;
}

export const StyledHeader = styled.header`
  background: blue;
  height: 100px;
  padding: 20px;

  -webkit-box-shadow: 0 0 8px 0 black;
  -moz-box-shadow: 0 0 8px 0 black;
  box-shadow: 0 0 8px 0 black;

  @media only screen and (max-width: 728px) {
    height: 130px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: unset;

  }


`;
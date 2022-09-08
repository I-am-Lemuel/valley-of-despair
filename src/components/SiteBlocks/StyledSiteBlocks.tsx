import styled from "styled-components";

export const StyledSiteBlocks = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-inline: auto;
`;
export const StyledSiteBtn = styled.div<{ selected: boolean }>`
  transition: 0.4s;
  margin: 1.3rem;
  width: 170px;
  ${({ selected }) =>
    selected &&
    `
    color: #ffff;
    background-color: #6E2594;
    border: 2px solid #000000;
    `}
  :hover {
    transition: 0.4s;
    border-radius: 15px;
    border: solid 1px black;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    outline: none;
    cursor: pointer;
  }
`;
export const StyledSiteTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem;
`;

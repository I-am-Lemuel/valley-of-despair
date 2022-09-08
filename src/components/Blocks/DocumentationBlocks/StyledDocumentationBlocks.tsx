import styled from "styled-components";

export const StyledDocumentationBlocks = styled.div`
  cursor: pointer;
  user-select: none;
  width: 120px;
  height: 120px;
  margin: 10px;
  flex-wrap: wrap;
  display: flex;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  padding: 15px;
  text-align: center;
  color: white;
  margin-top: 35px;
  :hover {
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0;
    transition: all 0.3s ease-in-out;
    box-shadow: 5px 12px 15px 1px #888888;
    color: red;
  }
`;

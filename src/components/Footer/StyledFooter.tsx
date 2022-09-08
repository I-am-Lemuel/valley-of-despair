import styled from "styled-components";

export const footerHeight = "300px";
export const StyledFooter = styled.div`
  margin-top: 200px;
  padding: 80px 0 80px 0;
  background: #212121;
  bottom: 0;
  width: 100%;
  max-height: ${footerHeight};

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const StyledFooterLink = styled.a`
  color: #fff;
  span {
    text-decoration: underline;
  }
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.small};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: 200ms ease-in;
  }
`;

export const StyledHeading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

import { StyledFooter,
    StyledContainer,
    StyledRow,
    StyledColumn,
    StyledFooterLink,
    StyledHeading, } from "./StyledFooter";

export default function Footer() {
    return (
            <StyledFooter>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Valley of Despair: Made by Personal Home Pain.
      </h1>
      <StyledContainer>
        <StyledRow>
          <StyledColumn>
            <StyledHeading>Github profiles:</StyledHeading>
            <StyledFooterLink href="https://github.com/Skullsko">Niek Goedemans</StyledFooterLink>
            <StyledFooterLink href="https://github.com/I-am-Lemuel">Lemuel Bakker</StyledFooterLink>
            <StyledFooterLink href="https://github.com/brentgotte">Brent Götte</StyledFooterLink>
            <StyledFooterLink href="https://github.com/Xaohs">Julian Roeland</StyledFooterLink>
            <StyledFooterLink href="https://github.com/Ssionn">Casper Kizewski</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Location</StyledHeading>
            <StyledFooterLink href="https://maps.app.goo.gl/pK46MLTE14155Yy77">Our headquarter</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Contact Us</StyledHeading>
            <StyledFooterLink href="mailto:lembak03@hotmail.com?subject=Feedback">Email</StyledFooterLink>
            <StyledFooterLink href="https://nl.linkedin.com/">LinkedIn</StyledFooterLink>
            <StyledFooterLink href="https://github.com/I-am-Lemuel/valley-of-despair">Github repository</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading></StyledHeading>
            <StyledFooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </StyledFooterLink>
          </StyledColumn>
        </StyledRow>
      </StyledContainer>
    </StyledFooter>

    )
}
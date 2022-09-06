import { StyledFooter,
    StyledContainer,
    StyledRow,
    StyledColumn,
    StyledFooterLink,
    StyledHeading, } from "./StyledFooter";

export default function Footer() {
    return (
            <StyledFooter>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <StyledContainer>
        <StyledRow>
          <StyledColumn>
            <StyledHeading>About Us</StyledHeading>
            <StyledFooterLink href="#">Aim</StyledFooterLink>
            <StyledFooterLink href="#">Vision</StyledFooterLink>
            <StyledFooterLink href="#">Testimonials</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Services</StyledHeading>
            <StyledFooterLink href="#">Writing</StyledFooterLink>
            <StyledFooterLink href="#">Internships</StyledFooterLink>
            <StyledFooterLink href="#">Coding</StyledFooterLink>
            <StyledFooterLink href="#">Teaching</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Contact Us</StyledHeading>
            <StyledFooterLink href="#">Uttar Pradesh</StyledFooterLink>
            <StyledFooterLink href="#">Ahemdabad</StyledFooterLink>
            <StyledFooterLink href="#">Indore</StyledFooterLink>
            <StyledFooterLink href="#">Mumbai</StyledFooterLink>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Social Media</StyledHeading>
            <StyledFooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </StyledFooterLink>
            <StyledFooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </StyledFooterLink>
          </StyledColumn>
        </StyledRow>
      </StyledContainer>
    </StyledFooter>

    )
}
import Link from "next/link";
import {
  StyledColumn,
  StyledContainer,
  StyledFooter,
  StyledFooterLink,
  StyledHeading,
  StyledRow,
} from "./StyledFooter";

export default function Footer() {
  return (
    <StyledFooter>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
        Valley of Despair: Made by Personal Home Pain.
      </h1>
      <StyledContainer>
        <StyledRow>
          <StyledColumn>
            <StyledHeading>Github profiles:</StyledHeading>
            <Link href="https://github.com/Skullsko" passHref>
              <StyledFooterLink>
                <span>Niek Goedemans</span>
              </StyledFooterLink>
            </Link>
            <Link href="https://github.com/I-am-Lemuel" passHref>
              <StyledFooterLink>
                <span>Lemuel Bakker</span>
              </StyledFooterLink>
            </Link>
            <Link href="https://github.com/brentgotte" passHref>
              <StyledFooterLink>
                <span>Brent Götte</span>
              </StyledFooterLink>
            </Link>
            <Link href="https://github.com/Xaohs" passHref>
              <StyledFooterLink>
                <span>Julian Roeland</span>
              </StyledFooterLink>
            </Link>
            <Link href="https://github.com/Ssionn" passHref>
              <StyledFooterLink>
                <span>Casper Kizewski</span>
              </StyledFooterLink>
            </Link>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Location</StyledHeading>
            <Link href="https://maps.app.goo.gl/pK46MLTE14155Yy77" passHref>
              <StyledFooterLink>
                <span>Our headquarters</span>
              </StyledFooterLink>
            </Link>
          </StyledColumn>
          <StyledColumn>
            <StyledHeading>Contact Us</StyledHeading>
            <Link href="mailto:PHP@support.com?subject=Feedback" passHref>
              <StyledFooterLink href="">
                <span>Email</span>
              </StyledFooterLink>
            </Link>
            <Link href="https://nl.linkedin.com/" passHref>
              <StyledFooterLink>
                <span>LinkedIn</span>
              </StyledFooterLink>
            </Link>
            <Link
              href="https://github.com/I-am-Lemuel/valley-of-despair"
              passHref
            >
              <StyledFooterLink>
                <span>Github repository</span>
              </StyledFooterLink>
            </Link>
          </StyledColumn>
        </StyledRow>
      </StyledContainer>
    </StyledFooter>
  );
}

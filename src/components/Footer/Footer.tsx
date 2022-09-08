import Link from 'next/link';
import {
	StyledColumn,
	StyledContainer,
	StyledFooter,
	StyledFooterLink,
	StyledHeading,
	StyledRow,
} from './StyledFooter';

export default function Footer() {
	return (
		<StyledFooter>
			<h1 style={{ color: 'white', textAlign: 'center', marginTop: '-50px' }}>
				Valley of Despair: Made by Personal Home Pain.
			</h1>
			<StyledContainer>
				<StyledRow>
					<StyledColumn>
						<StyledHeading>Github profiles:</StyledHeading>
						<Link href='https://github.com/Skullsko' passHref>
							<StyledFooterLink>Niek Goedemans</StyledFooterLink>
						</Link>
						<Link href='https://github.com/I-am-Lemuel' passHref>
							<StyledFooterLink>Lemuel Bakker</StyledFooterLink>
						</Link>
						<Link href='https://github.com/brentgotte' passHref>
							<StyledFooterLink>Brent Götte</StyledFooterLink>
						</Link>
						<Link href='https://github.com/Xaohs' passHref>
							<StyledFooterLink>Julian Roeland</StyledFooterLink>
						</Link>
						<Link href='https://github.com/Ssionn' passHref>
							<StyledFooterLink>Casper Kizewski</StyledFooterLink>
						</Link>
					</StyledColumn>
					<StyledColumn>
						<StyledHeading>Location</StyledHeading>
						<Link href='https://maps.app.goo.gl/pK46MLTE14155Yy77' passHref>
							<StyledFooterLink>Our headquarters</StyledFooterLink>
						</Link>
					</StyledColumn>
					<StyledColumn>
						<StyledHeading>Contact Us</StyledHeading>
						<Link href='mailto:PHP@support.com?subject=Feedback' passHref>
							<StyledFooterLink href=''>Email</StyledFooterLink>
						</Link>
						<Link href='https://nl.linkedin.com/' passHref>
							<StyledFooterLink>LinkedIn</StyledFooterLink>
						</Link>
						<Link
							href='https://github.com/I-am-Lemuel/valley-of-despair'
							passHref>
							<StyledFooterLink>Github repository</StyledFooterLink>
						</Link>
					</StyledColumn>
				</StyledRow>
			</StyledContainer>
		</StyledFooter>
	);
}

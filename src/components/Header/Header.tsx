import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { StyledHeader, StyledLogo, StyledText } from './StyledHeader';

interface Props {}

const Header: FunctionComponent<Props> = (props: any) => {
	return (
		<StyledHeader>
			<StyledLogo>
				<Link href='/'>
					<a>
						<Image src='/logo.svg' alt='Logo' width={300} height={130} />
					</a>
				</Link>
				</StyledLogo>
				<StyledText>
				<div>
					<h1>Valley of Despair</h1>
				</div>
				</StyledText>
		</StyledHeader>
	);
};
export default Header;

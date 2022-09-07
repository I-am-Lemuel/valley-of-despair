import { FunctionComponent } from 'react';
import { StyledHeader, StyledText } from './StyledHeader';

interface Props {}

const Header: FunctionComponent<Props> = (props: any) => {
	return (
		<StyledHeader>
			<StyledText>
				<p>Valley of Despair</p>
			</StyledText>
		</StyledHeader>
	);
};
export default Header;

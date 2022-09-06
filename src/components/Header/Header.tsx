import { FunctionComponent } from 'react';
import { StyledHeader, StyledText } from './StyledHeader';

interface Props {}

const Header: FunctionComponent<Props> = (props: any) => {
	return (
		<StyledHeader>
			<StyledText>
				<div>
					<h1>Valley of Despair</h1>
				</div>
			</StyledText>
		</StyledHeader>
	);
};
export default Header;

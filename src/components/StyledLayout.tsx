import styled from 'styled-components';
import { footerHeight } from './Footer/StyledFooter';

const StyledLayout = styled.div`
	font-family: 'Roboto', sans-serif;
	min-height: 100vh;
	width: 100%;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.primary};

	a {
		text-decoration: none;
	}

	button {
		border-radius: 10px;
	}
`;
export const StyledContent = styled.div`
	min-height: calc(105vh - ${footerHeight});
	margin-left: 10px;

	@media only screen and (max-width: 768px) {
		margin-left: 0;

		h1 {
			margin: 0;
		}
	}
`;
export default StyledLayout;

import styled from 'styled-components';

interface Props {
	toggle?: boolean;
}

export const StyledHeader = styled.header`
	height: 150px;
	padding: 10px;
	display: flex;
	flex-direction: row;

	margin-bottom: 90px;

	-webkit-box-shadow: 0 0 8px 0 black;
	-moz-box-shadow: 0 0 8px 0 black;
	box-shadow: 0 0 8px 0 black;

	@media only screen and (max-width: 728px) {
		height: 130px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: unset;
	}
`;

export const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const StyledText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0.76;
	font-style: italic;
	
`;
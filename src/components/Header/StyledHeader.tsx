import styled from 'styled-components';

interface Props {
	toggle?: boolean;
}

export const StyledHeader = styled.header`
	height: 150px;
	padding: 10px;

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
	width: 100%;
	align-items: center;

	div h1 {
		margin: 0;
		padding: 0;
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		width: 100%;
		margin-top: 20px;
	}
	div {
		margin-left: 5%;
	}
`;

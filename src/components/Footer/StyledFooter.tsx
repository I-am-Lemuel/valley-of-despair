import styled from 'styled-components';

export const footerHeight = '80px';

export const StyledFooter = styled.footer`
	display: flex;
	position: relative;
	bottom: 0;
	height: ${footerHeight};
	width: 100%;
	text-align: left;
	z-index: 1;
	justify-content: center;
	align-items: center;
	color: white;
	-webkit-box-shadow: 0 0 8px 0 black;
	-moz-box-shadow: 0 0 8px 0 black;
	box-shadow: 0 0 8px 0 black;

	p {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 60%;
	}
`;

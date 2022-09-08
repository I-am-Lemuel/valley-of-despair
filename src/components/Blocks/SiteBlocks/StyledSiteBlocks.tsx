import styled, { css } from 'styled-components';

export const StyledSiteBlocks = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	flex-wrap: wrap;
	margin-inline: auto;
	cursor: pointer;
`;
export const StyledSiteBtn = styled.div<{ selected: boolean }>`
	transition: 0.4s;
	margin: 2.5rem;
	padding: 20px;
	width: 160px;
	font-weight: bold;
	${({ selected }) =>
		selected &&
		css`
			transition: 0.4s;
			border-radius: 15px;
			background-color: ${({ theme }) => theme.colors.secondary};
			opacity: 0.8;
			outline: none;
			color: #ffff;
			border: 3px solid #a9523c;
		`}
	:hover {
		transition: 0.4s;
		border-radius: 15px;
		background-color: ${({ theme }) => theme.colors.secondary};
		opacity: 0.8;
		transform: scale(1.2);
		-webkit-transform: scale(1.2);
		-ms-transform: scale(1.2);
		outline: none;
		color: #ffff;
	}
`;
export const StyledSiteTitle = styled.div`
	text-align: center;
	font-size: 1.5rem;
	margin: 1rem;
`;

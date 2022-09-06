import styled from 'styled-components';

export const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-direction: column;
	align-items: center;

	button {
		width: 38px;
		height: 42px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.primary};
		font-size: 15px;
		border-radius: 0px;
		cursor: pointer;
		border: unset;
		border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	}
	div {
		display: flex;
		align-items: center;
		border-radius: 3px;
	}
	input {
		font-size: 20px;
		padding-left: 12px;
		height: 40px;
		width: 500px;
		padding-right: 20px;
		border: 2px solid #2196f3;

		border-radius: 0px;
		outline: none;
		border: none;
		border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	}
	input[type='text']:focus {
		transition: all 0.5s;
		border-radius: 10px;
		border-bottom: 1px solid ${(props) => props.theme.colors.accent};
		box-shadow: 0px 0px 4px 1px ${(props) => props.theme.colors.accent};
		outline: none;
	}
	button:hover {
		color: #9e9e9e;
	}
`;

export const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	justify-content: flex-start;
`;

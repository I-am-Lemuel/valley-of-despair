import styled from 'styled-components';

export const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin-top: 150px;

	/* button {
		width: 40px;
		height: 42px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.primary};
		font-size: 15px;
		border-radius: 0px;
		cursor: pointer;
		border: none;
		transition: 0.7s;
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
		transform: scale(1.5);
		-webkit-transform: scale(1.5);
		-ms-transform: scale(1.5);
		outline: none;
	} */
`;

export const StyledBar = styled.div`
	padding-top: 64px;
	display: flex;
	justify-content: center;
	width: 100%;

	input {
		width: 50%;
		padding: 12px 54px;

		background-color: transparent;
		transition: transform 250ms ease-in-out;
		font-size: ${(props) => props.theme.fontSizes.small};
		line-height: 18px;

		color: #575756;
		background-color: transparent;

		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: 18px 18px;
		background-position: 3% center;
		border-radius: 50px;
		border: 1px solid #575756;
		transition: all 250ms ease-in-out;
		backface-visibility: hidden;
		transform-style: preserve-3d;

		&::placeholder {
			color: color(#575756 a(0.8));
			text-transform: uppercase;
			letter-spacing: 1.5px;
		}

		&:hover,
		&:focus {
			padding: 12px 0px 12px 54px;
			outline: 0;
			border: 1px solid transparent;
			border-bottom: 1px solid #575756;
			border-radius: 0;
			background-position: 3% center;
		}
	}
`;
export const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	justify-content: flex-start;
`;

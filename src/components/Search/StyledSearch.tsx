import styled from 'styled-components';

export const StyledSearch = styled.div`
	button {
		width: 54px;
		height: 48px;
		padding: 10px;
		background: #2196f3;
		color: white;
		font-size: 17px;
		border: 1px solid grey;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
	}

	input {
		padding-right: 20px;
		margin-right: 25px;
		border: 1px solid grey;	
	}

	button:hover {
		background: #0b7dda;
	}

`;

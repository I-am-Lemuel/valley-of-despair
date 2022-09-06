import styled from 'styled-components';

export const StyledSearch = styled.div`
	button {
		width: 60px;
		height: 60px;
		padding: 10px;
		background: #2196f3;
		color: white;
		font-size: 17px;
		border: 1px solid grey;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
	}

	button:hover {
		background: #0b7dda;
	}
`;

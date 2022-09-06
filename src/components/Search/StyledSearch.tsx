import styled from 'styled-components';

export const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	button {
		width: 38px;
		height: 42px;
		/* background: #2196f3; */
		background-color: transparent;
		color: #000000;
		font-size: 15px;
		/* border: 1px solid lightgray; */
		border-radius: 0px;
		/* border-left: none; Prevent double borders */
		cursor: pointer;
		border: unset;
		border-bottom: black solid 1px;
	}
	.selection {
		display: flex;
		align-items: center;
		border-radius: 3px;
		border-color: black;
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
		border-bottom: black solid 1px;

	}
	input[type="text"]:focus {
		transition: all 0.5s;
		border-bottom: 1px solid #2196f3;
		box-shadow: 0px 0px 4px 1px #2196f3;
		outline: none;
	}
	button:hover {
		color: #9e9e9e;
	}

`;

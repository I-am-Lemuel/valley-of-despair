import styled from 'styled-components';

export const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	button {
		height: 25px;
		width: 45px;
		/* height: 42px; */
		background-color: transparent;
		color: #000000;
		font-size: 15px;
		border-radius: 0px;
		cursor: pointer;
		border: unset;
		/* border-bottom: black solid 1px; */
	}
	div {
		height: 25px;
		border-bottom: black solid 1px;
	}
	input {
		font-size: 20px;
		padding-left: 12px;
		/* height: 40px; */
		width: 500px;
		padding-right: 20px;
		border: 2px solid #2196f3;	
		border-radius: 0px;
		outline: none;
		border: none;
		/* border-bottom: black solid 1px; */

	}
	input[type="text"]:focus {
		transition: all 0.5s;
		border-color: #2196f3;
		box-shadow: 0px 0px 4px 1px #2196f3;
		outline: none;
	}
	button:hover {
		transition: all 0.5s;
		box-shadow: 0px 0px 4px 1px #2196f3;
		outline: none;
	}

`;

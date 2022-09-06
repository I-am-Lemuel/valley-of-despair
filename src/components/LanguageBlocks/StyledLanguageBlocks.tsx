import styled from 'styled-components';

export const StyledLanguageBlocks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: -15px;
	margin-top: 130px;
	width: 60%;
	flex-direction: row;
`;
export const StyledCard = styled.div`
	cursor: pointer;
	user-select: none;
	width: 100px;
	height: 100px;
	margin: 10px;
	flex-wrap: wrap;
	display: flex;
	background-color: #f5f5f5;
	transition: all 0.3s ease-in-out;
	padding: 15px;
	text-align: center;
	color: white;
	margin-top: 35px;
	:hover {
		padding: 20px;
		background-color: lightblue;
		border-radius: 0;
		transition: all 0.3s ease-in-out;
		box-shadow: 5px 12px 15px 1px #888888;
		color: red;
	}
`;

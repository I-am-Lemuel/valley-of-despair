import styled from 'styled-components';

export const StyledSiteBlocks = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;   
    border: solid 1px red; 
    width: 50%;
    flex-wrap: wrap;
`;
export const StyledSiteBtn = styled.div<{ selected: boolean }>`
    transition: 0.4s;
    margin: 1.5rem;
${({ selected }) =>
    selected
        && `
    border: 2px solid #000;
    `}
    :hover {
        transition: 0.4s;
        border-radius: 15px;
        background-color: lightgrey;
        transform: scale(1.2);
		-webkit-transform: scale(1.2);
		-ms-transform: scale(1.2);
		outline: none;
    }
`;

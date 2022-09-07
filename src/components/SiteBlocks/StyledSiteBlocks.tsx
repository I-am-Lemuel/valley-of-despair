import styled from 'styled-components';

export const StyledSiteBlocks = styled.div`
    border: 1px solid red;
`;
export const StyledSiteBtn = styled.div<{ selected: boolean }>`

${({ selected }) =>
    selected
        && `
    border: 2px solid #000;
    `}


`;

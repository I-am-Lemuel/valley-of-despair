import styled from 'styled-components';

export const StyledSiteBlocks = styled.div`

`;
export const StyledSiteBtn = styled.button<{ selected: boolean }>`
${({ selected }) =>
    selected
        ? `
    border: 2px solid #000;
    `
        : `
    border: 2px solid #fff;
    `}


`;

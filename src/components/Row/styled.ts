import styled from 'styled-components';

interface StyledTableRowProps {
  rowTranslateVal: number;
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  position: relative;
  transform: ${({ rowTranslateVal }) =>
    rowTranslateVal ? 'translateY(' + rowTranslateVal + 'px)' : ''};
  transition: all 0.5s linear;
`;

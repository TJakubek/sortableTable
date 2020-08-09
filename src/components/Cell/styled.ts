import styled from 'styled-components';

interface StyledCellProps {
  evenOdd: Boolean;
  isHovered: Boolean;
  hoveredCellInRowOrColumn: Boolean;
  last: Boolean;
  maxWidth: string;
}

export const StyledCell = styled.td<StyledCellProps>`
  position: ${({ last }) => (last ? 'sticky' : 'static')};
  right: ${({ last }) => (last ? 0 : '')};
  background-color: ${({ evenOdd, isHovered, hoveredCellInRowOrColumn }) =>
    isHovered
      ? '#e03e9c'
      : hoveredCellInRowOrColumn
      ? '#f8d1e8'
      : evenOdd
      ? '#d9f4fc'
      : '#ffffff'};
  width: ${({ maxWidth }) => maxWidth};
  cursor: default;
`;

import styled from 'styled-components';

interface StyledHeaderProps {
  hoveredCellInColumn: Boolean;
  last: Boolean;
  maxWidth: string;
}

export const StyledHeaders = styled.th<StyledHeaderProps>`
  position: sticky;
  z-index: 2;
  top: 0;
  right: ${({ last }) => (last ? 0 : '')};
  background-color: #36304a;
  padding: 1rem 1rem;
  color: white;
  text-transform: capitalize;
  background-color: ${({ hoveredCellInColumn }) =>
    hoveredCellInColumn ? '#fcae1e' : '#36304a'};
  width: ${({ maxWidth }) => maxWidth};
  cursor: pointer;
`;

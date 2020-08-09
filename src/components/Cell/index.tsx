import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import useHover from 'src/hooks/useHover';
import { StyledCell } from './styled';

const Cell: FC<CellProps> = ({
  data,
  hoveredCell,
  position,
  setHoveredCell,
  ...props
}) => {
  const [hoverRef, isHovered] = useHover<HTMLTableDataCellElement>();
  const { rowInd, colInd } = position;
  const hoveredCellInRowOrColumn =
    hoveredCell.row === rowInd || hoveredCell.column === colInd;

  useEffect(() => {
    if (isHovered) {
      setHoveredCell({ column: colInd, row: rowInd });
    }
  }, [isHovered]);

  return (
    <StyledCell
      ref={hoverRef}
      isHovered={isHovered}
      hoveredCellInRowOrColumn={hoveredCellInRowOrColumn}
      {...props}
    >
      <p>{data}</p>
    </StyledCell>
  );
};

interface CellProps {
  evenOdd: Boolean;
  data: string | number;
  hoveredCell: HoveredCellData;
  last: Boolean;
  maxWidth: string;
  position: { colInd: number; rowInd: number };
  setHoveredCell: Dispatch<SetStateAction<HoveredCellData>>;
}
export default Cell;

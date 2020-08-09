import React, { Dispatch, forwardRef, Ref, SetStateAction } from 'react';
import columnConfig from 'src/config/columns';
import Cell from '../Cell';
import { StyledTableRow } from './styled';

const Row = forwardRef(
  (
    { rowData, rowInd, rowTranslateVal, setHoveredCell, ...props }: RowProps,
    ref: Ref<HTMLTableRowElement>
  ) => {
    const handleMouseLeave = () => {
      setHoveredCell({ column: -1, row: -1 });
    };

    return (
      <StyledTableRow
        ref={ref}
        rowTranslateVal={rowTranslateVal}
        onMouseLeave={handleMouseLeave}
      >
        {columnConfig.map((el, colInd) => {
          return (
            <Cell
              data={rowData[el.text as keyof Data]}
              last={columnConfig.length - 1 === colInd}
              key={el.text}
              maxWidth={el.maxWidth || 'none'}
              position={{ rowInd, colInd }}
              setHoveredCell={setHoveredCell}
              {...props}
            />
          );
        })}
      </StyledTableRow>
    );
  }
);

interface RowProps {
  evenOdd: Boolean;
  hoveredCell: HoveredCellData;
  rowInd: number;
  rowData: Data;
  rowTranslateVal: number;
  setHoveredCell: Dispatch<SetStateAction<HoveredCellData>>;
}

export default Row;

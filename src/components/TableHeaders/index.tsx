import React, { Dispatch, FC, SetStateAction } from 'react';
import columnConfig from 'src/config/columns';
import SortOrder from 'src/enums/sortOrder';
import sort from 'src/utils/sort';
import { StyledHeaders } from './styled';

const TableHeaders: FC<TableHeadersProps> = ({
  hoveredCell,
  setSortInfo,
  sortInfo,
  tableData,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    const sortKey = (e.target as HTMLTableRowElement).innerText.toLowerCase();
    const { sortOrder, direction } = sort({ tableData, sortKey, sortInfo });

    setSortInfo((prev) => {
      return {
        id: sortKey,
        dir: sortKey === prev.id ? direction : SortOrder.Asc,
        sort: sortOrder,
      };
    });
  };

  return (
    <thead>
      <tr onClick={handleClick}>
        {columnConfig.map((el, ind) => (
          <StyledHeaders
            hoveredCellInColumn={hoveredCell.column === ind}
            key={el.text + ind}
            last={columnConfig.length - 1 === ind}
            maxWidth={el.maxWidth || 'none'}
          >
            {el.text}
          </StyledHeaders>
        ))}
      </tr>
    </thead>
  );
};

interface TableHeadersProps {
  hoveredCell: HoveredCellData;
  setSortInfo: Dispatch<SetStateAction<SortData>>;
  sortInfo: SortData;
  tableData: Data[];
}

export default TableHeaders;

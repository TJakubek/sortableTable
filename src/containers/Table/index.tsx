import React, {
    createRef, FC, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState
} from 'react';
import Row from 'src/components/Row';
import TableHeaders from 'src/components/TableHeaders';
import { columns } from 'src/config/columns';
import SortOrder from 'src/enums/sortOrder';
import calcHeight from 'src/utils/calcHeight';
import { StyledTable } from './styled';

const Table: FC<TableProps> = ({ tableData }) => {
  const [refs, setRefs] = useState<Array<RefObject<HTMLTableRowElement>>>([]);
  const [rowTranslateVal, setRowTranslateVal] = useState<number[] | []>([]);
  const [sortInfo, setSortInfo] = useState<SortData>({
    id: 'id',
    dir: SortOrder.Asc,
    sort: [] as Data[],
  });
  const [hoveredCell, setHoveredCell] = useState<HoveredCellData>({
    row: -1,
    column: -1,
  });

  useEffect(() => {
    setRefs(tableData.map(() => createRef<HTMLTableRowElement>()));
  }, []);

  useEffect(() => {
    const unsub = window.addEventListener('resize', () => {
      setRowTranslateVal(calcHeight(sortInfo, tableData, refs));
    });

    setRowTranslateVal(calcHeight(sortInfo, tableData, refs));

    return unsub;
  }, [sortInfo.sort]);

  return (
    <StyledTable>
      <TableHeaders
        sortInfo={sortInfo}
        setSortInfo={setSortInfo}
        tableData={tableData}
        hoveredCell={hoveredCell}
      />
      <tbody>
        {tableData.map((el, ind) => {
          const evenOdd =
            sortInfo.sort.length > 0
              ? sortInfo.sort.findIndex((sortEl) => sortEl.id === el.id) % 2 ===
                0
              : ind % 2 === 0;
          return (
            <Row
              evenOdd={evenOdd}
              hoveredCell={hoveredCell}
              key={el[columns.City as keyof Data] + ind.toString()}
              ref={refs[ind]}
              rowData={el}
              rowInd={ind}
              setHoveredCell={setHoveredCell}
              rowTranslateVal={rowTranslateVal[ind]}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
};

interface TableProps {
  tableData: Data[];
}

export default Table;

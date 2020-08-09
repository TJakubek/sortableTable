import { columns } from 'src/config/columns';
import SortOrder from 'src/enums/sortOrder';

interface sortFn {
  (param: { sortKey: string; sortInfo: SortData; tableData: Data[] }): {
    direction: SortOrder;
    sortOrder: Data[];
  };
}

const sort: sortFn = ({ sortKey, sortInfo, tableData }) => {
  const direction =
    sortKey !== sortInfo.id
      ? SortOrder.Asc
      : sortInfo.dir === SortOrder.Asc
      ? SortOrder.Des
      : SortOrder.Asc;

  const sortOrder = [...tableData].sort((a, b) => {
    let aVal = a[sortKey as keyof Data];
    let bVal = b[sortKey as keyof Data];

    if (sortKey === columns.Phone) {
      const reg = /[\D]/gm;
      aVal = (aVal as string).replace(reg, '');
      bVal = (bVal as string).replace(reg, '');
    }

    if (aVal > bVal) {
      return direction === SortOrder.Asc ? 1 : -1;
    } else if (aVal < bVal) {
      return direction === SortOrder.Asc ? -1 : 1;
    }
    return 0;
  });
  return { sortOrder, direction };
};

export default sort;

import { RefObject } from 'react';

const calcHeight = (
  sortInfo: SortData,
  tableData: Data[],
  refs: Array<RefObject<HTMLTableRowElement>>
) => {
  const translateValue: number[] = [];
  let bottomHeight = 0;
  let heights: number[] = [];
  for (let i = 0; i < sortInfo.sort.length; i++) {
    const index = tableData.findIndex((el) => el === sortInfo.sort[i]);
    heights.push(refs[i].current?.getBoundingClientRect().height as number);
    let initialHeight = 0;
    for (let j = 0; j < index; j++) {
      initialHeight += refs[j].current?.getBoundingClientRect()
        .height as number;
    }
    translateValue[index] = bottomHeight - initialHeight;
    bottomHeight += refs[index].current?.getBoundingClientRect()
      .height as number;
  }
  return translateValue;
};

export default calcHeight;

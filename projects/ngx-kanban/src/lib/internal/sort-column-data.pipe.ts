import { Pipe, PipeTransform } from '@angular/core';

import { DataSorter, KanbanData } from '../core/kanban.models';

@Pipe({
  name: 'sortColumnData',
})
export class SortColumnDataPipe implements PipeTransform {
  public transform(data: KanbanData[], sorter: DataSorter): KanbanData[] {
    const ret = [...data];
    ret.sort(sorter);
    console.log(ret);
    return ret;
  }
}

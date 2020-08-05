import { Pipe, PipeTransform } from '@angular/core';

import { KanbanData, KanbanLabel } from '../core/kanban.models';

@Pipe({
  name: 'filterByLabels',
})
export class FilterByLabelsPipe implements PipeTransform {
  public transform(values: KanbanData[], labels: KanbanLabel[]): KanbanData[] {
    const labelIds = labels.map((it) => it.id);
    return values.filter((it) => labelIds.includes(it.labelId));
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { KanbanColumnDef, KanbanData } from '../kanban.models';

@Component({
  selector: 'kanban-column-heading',
  templateUrl: './column-heading.component.html',
  styleUrls: ['./column-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnHeadingComponent {
  @Input() public column: KanbanColumnDef;
  @Input() public data: KanbanData[];
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { KanbanColumnDef } from '../../core/kanban.models';

@Component({
  selector: 'kanban-drop-zone-list',
  templateUrl: './drop-zone-list.component.html',
  styleUrls: ['./drop-zone-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropZoneListComponent {
  @Input() public column: KanbanColumnDef;
}

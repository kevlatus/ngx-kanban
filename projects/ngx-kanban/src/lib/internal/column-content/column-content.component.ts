import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  KanbanColumnDefWithTemplate,
  KanbanData,
} from '../../core/kanban.models';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'kanban-column-content',
  templateUrl: './column-content.component.html',
  styleUrls: ['./column-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnContentComponent {
  @Input() public column: KanbanColumnDefWithTemplate;
  @Input() public data: KanbanData[];

  constructor(public kanban: KanbanService) {}
}

import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import {
  KanbanColumnDefWithTemplate,
  KanbanData,
} from '../../core/kanban.models';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'kanban-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  /** The definition of the column containing this card list. */
  @Input() public column: KanbanColumnDefWithTemplate;
  /** The data to be rendered in this list. */
  @Input() public data: KanbanData[];

  constructor(public kanban: KanbanService) {}

  onDragStarted(event: CdkDragStart<KanbanData>): void {
    this.kanban.updateDraggable(event.source.data);
  }

  onDragEnded(_: CdkDragEnd<KanbanData>): void {
    this.kanban.updateDraggable(null);
  }
}

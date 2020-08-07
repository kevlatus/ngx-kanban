import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { KanbanData, KanbanLabel } from '../../core/kanban.models';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'kanban-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
})
export class DropZoneComponent {
  @Input() public label: KanbanLabel;

  constructor(private kanban: KanbanService) {}

  get name(): string {
    return this.label?.name ?? this.label?.id;
  }

  onDrop(event: CdkDragDrop<KanbanLabel>): void {
    if (event.previousContainer === event.container) {
      return;
    }

    const dropListLabelId = event.container.data.id;
    const itemLabelId = (event.item.data as KanbanData).labelId;
    if (dropListLabelId !== itemLabelId) {
      this.kanban.dropDraggable(event.item.data, dropListLabelId);
    }
  }
}

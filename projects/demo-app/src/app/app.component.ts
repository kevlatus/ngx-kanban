import { Component } from '@angular/core';
import {
  ColumnSorter,
  defaultColumnSorter,
  KanbanColumnDef,
  KanbanData,
  KanbanDrop,
  KanbanLabel,
  performKanbanDrop,
} from 'ngx-kanban';

interface Task extends KanbanData {
  readonly title: string;
}

type TaskStatusName = 'Todo' | 'Doing' | 'Done' | 'Parked' | 'Abandoned';

const TaskStatus: { [key in TaskStatusName]: KanbanLabel } = {
  Todo: { id: 'todo' },
  Doing: { id: 'doing' },
  Done: { id: 'done' },
  Parked: { id: 'parked' },
  Abandoned: { id: 'abandoned' },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ascending = true;

  columns: KanbanColumnDef[] = [
    { name: 'TODO', labels: [TaskStatus.Todo, TaskStatus.Parked] },
    { name: 'DOING', labels: [TaskStatus.Doing] },
    { name: 'DONE', labels: [TaskStatus.Done, TaskStatus.Abandoned] },
  ];

  data: Task[] = Array(50)
    .fill(0)
    .map((_, idx) => ({
      id: idx.toString(),
      labelId:
        TaskStatus[
          Object.keys(TaskStatus)[idx % Object.keys(TaskStatus).length]
        ].id,
      title: `Title ${idx}`,
    }));

  dropValidator(drop: KanbanDrop<Task>): boolean {
    if (drop.data.labelId === TaskStatus.Parked.id) {
      return drop.newLabelId !== TaskStatus.Todo.id;
    }
    return true;
  }

  get columnSorter(): ColumnSorter {
    return (a: KanbanData, b: KanbanData) =>
      defaultColumnSorter(a, b) * (this.ascending ? 1 : -1);
  }

  onDropped($event: KanbanDrop<Task>): void {
    this.data = performKanbanDrop<Task>(this.data, $event);
  }

  onAscendingChanged($event: Event): void {
    this.ascending = ($event.target as HTMLInputElement).checked;
  }
}

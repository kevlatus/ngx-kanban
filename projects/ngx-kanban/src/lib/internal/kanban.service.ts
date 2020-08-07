import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { KanbanData, KanbanDrop } from '../core/kanban.models';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  private readonly draggableSubject = new BehaviorSubject<KanbanData | null>(
    null
  );
  private readonly onDropSubject = new Subject<KanbanDrop>();

  public readonly draggable$: Observable<KanbanData | null> = this.draggableSubject.asObservable();

  public readonly isDragging$: Observable<boolean> = this.draggable$.pipe(
    map((v) => v !== null)
  );

  public readonly isNotDragging$: Observable<boolean> = this.isDragging$.pipe(
    map((v) => !v)
  );

  public readonly onDrop$: Observable<
    KanbanDrop
  > = this.onDropSubject.asObservable();

  public updateDraggable(data: KanbanData | null): void {
    this.draggableSubject.next(data);
  }

  public dropDraggable(data: KanbanData, newLabelId: string): void {
    this.onDropSubject.next({ data, newLabelId });
  }
}

import { TestBed } from '@angular/core/testing';
import { combineLatest } from 'rxjs';
import { scan, skip, take } from 'rxjs/operators';

import { KanbanData } from '../core/kanban.models';
import { KanbanService } from './kanban.service';

describe('KanbanService', () => {
  let service: KanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanService);
  });

  it('creates a new instance', () => {
    expect(service).toBeTruthy();
  });

  it('is not dragging initially', async (done) => {
    combineLatest([service.isDragging$, service.isNotDragging$])
      .pipe(take(1))
      .subscribe(([isDragging, isNotDragging]) => {
        expect(isDragging).toBe(false);
        expect(isNotDragging).toBe(true);
        done();
      });
  }, 2000);

  it('has no draggable initially', async (done) => {
    service.draggable$.pipe(take(1)).subscribe((v) => {
      expect(v).toBeNull();
      done();
    });
  }, 2000);

  it('has a draggable after setting one', async (done) => {
    const draggable: KanbanData = { id: 'id', labelId: 'labelId' };
    service.updateDraggable(draggable);
    service.draggable$.pipe(take(1)).subscribe((d) => {
      expect(d).toEqual(draggable);
      done();
    });
  }, 2000);

  it('is not dragging, when setting draggable to null', (done) => {
    service.isDragging$
      .pipe(
        scan((acc, v) => [...acc, v], []),
        skip(2)
      )
      .subscribe((v) => {
        expect(v).toEqual([false, true, false]);
        done();
      });

    service.updateDraggable({ id: 'id', labelId: 'labelId' });
    service.updateDraggable(null);
  }, 2000);

  it('calling dropDraggable fires matching onDrop event', (done) => {
    const draggable: KanbanData = { id: 'id', labelId: 'labelId' };
    const newLabelId = 'newId';
    service.onDrop$.subscribe((drop) => {
      expect(drop.data).toBe(draggable);
      expect(drop.newLabelId).toBe(newLabelId);
      done();
    });
    service.dropDraggable(draggable, newLabelId);
  });
});

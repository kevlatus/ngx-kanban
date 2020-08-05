import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from '../card-list/card-list.component';
import { DropZoneComponent } from '../drop-zone/drop-zone.component';
import { DropZoneListComponent } from '../drop-zone-list/drop-zone-list.component';
import { KanbanService } from '../kanban.service';
import { ColumnContentComponent } from './column-content.component';

describe('ColumnContentComponent', () => {
  let component: ColumnContentComponent;
  let fixture: ComponentFixture<ColumnContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardListComponent,
        ColumnContentComponent,
        DropZoneComponent,
        DropZoneListComponent,
      ],
      imports: [DragDropModule],
      providers: [KanbanService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnContentComponent);
    component = fixture.componentInstance;
    component.column = { cardTemplate: null, labels: [], name: 'Test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

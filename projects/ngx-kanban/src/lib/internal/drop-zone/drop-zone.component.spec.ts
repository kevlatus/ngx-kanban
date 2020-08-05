import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanService } from '../kanban.service';
import { DropZoneComponent } from './drop-zone.component';

describe('DropZoneComponent', () => {
  let component: DropZoneComponent;
  let fixture: ComponentFixture<DropZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropZoneComponent],
      imports: [DragDropModule],
      providers: [KanbanService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropZoneComponent } from '../drop-zone/drop-zone.component';
import { DropZoneListComponent } from './drop-zone-list.component';

describe('DropZoneListComponent', () => {
  let component: DropZoneListComponent;
  let fixture: ComponentFixture<DropZoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropZoneListComponent, DropZoneComponent],
      imports: [DragDropModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropZoneListComponent);
    component = fixture.componentInstance;
    component.column = { labels: [], name: 'Test' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from '../../internal/card-list/card-list.component';
import { ColumnContentComponent } from '../../internal/column-content/column-content.component';
import { ColumnLayoutComponent } from '../../internal/column-layout/column-layout.component';
import { ContentDefDirective } from '../../internal/content-def.directive';
import { DropZoneComponent } from '../../internal/drop-zone/drop-zone.component';
import { DropZoneListComponent } from '../../internal/drop-zone-list/drop-zone-list.component';
import { FilterByLabelsPipe } from '../../internal/filter-by-labels.pipe';
import { FilterByPredicatePipe } from '../../internal/filter-by-predicate.pipe';
import { KanbanService } from '../../internal/kanban.service';
import { SortColumnDataPipe } from '../../internal/sort-column-data.pipe';
import { CardDefDirective } from '../card-def.directive';
import { ColumnDefDirective } from '../column-def.directive';
import { ColumnHeadingComponent } from '../column-heading/column-heading.component';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CardDefDirective,
        CardListComponent,
        ColumnContentComponent,
        ColumnDefDirective,
        ColumnHeadingComponent,
        ColumnLayoutComponent,
        ContentDefDirective,
        DropZoneComponent,
        DropZoneListComponent,
        FilterByLabelsPipe,
        FilterByPredicatePipe,
        SortColumnDataPipe,
      ],
      imports: [DragDropModule],
      providers: [KanbanService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

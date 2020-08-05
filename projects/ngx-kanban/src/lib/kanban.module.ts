import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './core/card/card.component';
import { CardDefDirective } from './core/card-def.directive';
import { ColumnDefDirective } from './core/column-def.directive';
import { ColumnHeadingComponent } from './core/column-heading/column-heading.component';
import { BoardComponent } from './core/board/board.component';
import { CardListComponent } from './internal/card-list/card-list.component';
import { ColumnContentComponent } from './internal/column-content/column-content.component';
import { ColumnLayoutComponent } from './internal/column-layout/column-layout.component';
import { ContentDefDirective } from './internal/content-def.directive';
import { DropZoneComponent } from './internal/drop-zone/drop-zone.component';
import { DropZoneListComponent } from './internal/drop-zone-list/drop-zone-list.component';
import { FilterByLabelsPipe } from './internal/filter-by-labels.pipe';
import { SortColumnDataPipe } from './internal/sort-column-data.pipe';
import { FilterByPredicatePipe } from './internal/filter-by-predicate.pipe';

@NgModule({
  declarations: [
    CardComponent,
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
    BoardComponent,
    SortColumnDataPipe,
    FilterByPredicatePipe,
  ],
  imports: [CommonModule, DragDropModule],
  exports: [
    CardComponent,
    CardDefDirective,
    ColumnDefDirective,
    ColumnHeadingComponent,
    BoardComponent,
  ],
})
export class KanbanModule {}

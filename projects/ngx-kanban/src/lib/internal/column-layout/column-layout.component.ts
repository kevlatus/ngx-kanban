import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
} from '@angular/core';

import { KanbanColumnDef } from '../../core/kanban.models';
import { ContentDefDirective } from '../content-def.directive';

/**
 * Renders a template for each column given by {@link columns}.
 * This ensures that components are aligned within their column,
 * if they are not contained within the same parent.
 * E.g. having a column header and content, but only allowing the content to scroll.
 */
@Component({
  selector: 'kanban-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnLayoutComponent {
  @ContentChild(ContentDefDirective) content: ContentDefDirective;

  @Input() public columns: KanbanColumnDef[];
}

import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

import { CardDefDirective } from './card-def.directive';
import { KanbanColumnDef, KanbanLabel } from './kanban.models';

@Directive({
  selector: '[kanbanColumnDef]',
})
export class ColumnDefDirective implements KanbanColumnDef {
  @ContentChild(CardDefDirective) card: CardDefDirective;

  @Input('kanbanColumnDef') public name: string;

  @Input() public labels: KanbanLabel[] = [];

  public get cardTemplate(): TemplateRef<any> {
    return this.card?.template;
  }
}

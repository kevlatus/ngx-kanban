import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kanbanCardDef]',
})
export class CardDefDirective {
  constructor(public template: TemplateRef<any>) {}
}

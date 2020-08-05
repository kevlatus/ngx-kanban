import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kanbanContentDef]',
})
export class ContentDefDirective {
  constructor(public template: TemplateRef<any>) {}
}

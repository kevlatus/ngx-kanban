import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPredicate',
})
export class FilterByPredicatePipe implements PipeTransform {
  public transform<T>(value: T[], predicate: (value: T) => boolean): T[] {
    return value.filter(predicate ?? (() => true));
  }
}

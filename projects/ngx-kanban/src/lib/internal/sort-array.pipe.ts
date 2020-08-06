import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
  public transform<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
    const ret = [...data];
    ret.sort(sorter);
    return ret;
  }
}

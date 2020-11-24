import { FilterByPredicatePipe } from './filter-by-predicate.pipe';

function _filterAbove(value: number): (v: number) => boolean {
  return (v) => v > value;
}

function _filterBelow(value: number): (v: number) => boolean {
  return (v) => v < value;
}

function _testFilter<T>(arr: T[], predicate: (v: T) => boolean): [T[], T[]] {
  const pipe = new FilterByPredicatePipe();
  const arrayFilter = arr.filter(predicate);
  const pipeFilter = pipe.transform(arr, predicate);
  return [arrayFilter, pipeFilter];
}

describe('FilterByPredicatePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPredicatePipe();
    expect(pipe).toBeTruthy();
  });

  it('filters an array according to the given predicate', () => {
    const arr = [81203, 21830, 2183, 12783, 18239, 831209, 38120];
    const a = _testFilter(arr, _filterAbove(15_000));
    expect(a[0]).toEqual(a[1]);

    const b = _testFilter(arr, _filterBelow(30_000));
    expect(b[0]).toEqual(b[1]);
  });

  it('returns a new array instead of the original', () => {
    const arr = [81203, 21830, 2183, 12783, 18239, 831209, 38120];
    const a = _testFilter(arr, _filterBelow(30_000));
    expect(a[0]).not.toBe(a[1]);
  });

  it('returns a new array with all items, when no predicate is passed', () => {
    const pipe = new FilterByPredicatePipe();
    const arr = [81203, 21830, 2183, 12783, 18239, 831209, 38120];
    const actual = pipe.transform(arr);
    expect(actual).toEqual(arr);
    expect(actual).not.toBe(arr);
  });
});

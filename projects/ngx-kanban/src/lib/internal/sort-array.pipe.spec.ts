import { SortArrayPipe } from './sort-array.pipe';

function _sortAscending<T>(a: T, b: T): number {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

function _sortDescending<T>(a: T, b: T): number {
  return _sortAscending(a, b) * -1;
}

function _testSort<T>(arr: T[], sorter: (a: T, b: T) => number): [T[], T[]] {
  const pipe = new SortArrayPipe();
  const arraySort = [...arr].sort(sorter);
  const pipeSort = pipe.transform(arr, sorter);
  return [arraySort, pipeSort];
}

describe('SortArrayPipe', () => {
  it('creates an instance', () => {
    const pipe = new SortArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts an array properly', () => {
    const arr = [81203, 21830, 2183, 12783, 18239, 831209, 38120];
    const asc = _testSort(arr, _sortAscending);
    expect(asc[0]).toEqual(asc[1]);

    const desc = _testSort(arr, _sortDescending);
    expect(desc[0]).toEqual(desc[1]);
  });

  it('returns a new array instead of the original', () => {
    const arr = [81203, 21830, 2183, 12783, 18239, 831209, 38120];
    const asc = _testSort(arr, _sortAscending);
    expect(asc[0]).not.toBe(asc[1]);
  });
});

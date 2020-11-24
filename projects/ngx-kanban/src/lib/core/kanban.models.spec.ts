import { KanbanData, KanbanDrop, performKanbanDrop } from './kanban.models';

describe('performKanbanDrop', () => {
  let items: KanbanData[];

  beforeEach(() => {
    items = [{ id: 'id', labelId: 'a' }];
  });

  it('updates the dropped item', () => {
    const drop: KanbanDrop = { data: items[0], newLabelId: 'b' };
    const update = performKanbanDrop(items, drop);
    expect(update).toContainEqual({
      id: items[0].id,
      labelId: drop.newLabelId,
    });
  });
});

describe('defaultDropValidator', () => {
  it('always returns true', () => {});
});

describe('defaultDataSorter', () => {});

describe('defaultDataFilter', () => {
  it('always returns true', () => {});
});

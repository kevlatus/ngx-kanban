import { TemplateRef } from '@angular/core';

export interface KanbanLabel {
  readonly id: string;
  readonly name?: string;
}

export interface KanbanColumnDef {
  readonly name: string;
  readonly labels: KanbanLabel[];
}

export interface KanbanColumnDefWithTemplate extends KanbanColumnDef {
  readonly cardTemplate: TemplateRef<any>;
}

export interface KanbanData {
  readonly id: string;
  readonly labelId: string;
}

export interface KanbanDrop<T extends KanbanData = KanbanData> {
  readonly data: T;
  readonly newLabelId: string;
}

export function performKanbanDrop<T extends KanbanData = KanbanData>(
  items: T[],
  drop: KanbanDrop<T>
): T[] {
  const updatedItem: T = { ...drop.data, labelId: drop.newLabelId };
  return [...items.filter((e) => e.id !== drop.data.id), updatedItem];
}

export type DropValidator = (drop: KanbanDrop) => boolean;

export function defaultDropValidator(_: KanbanDrop): boolean {
  return true;
}

export type DataSorter = (a: KanbanData, b: KanbanData) => number;

export function defaultDataSorter(a: KanbanData, b: KanbanData): number {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
}

export type DataFilter = (data: KanbanData) => boolean;

export const defaultDataFilter: DataFilter = (data: KanbanData) => true;

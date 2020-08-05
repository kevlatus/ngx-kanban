import {
  AfterContentChecked,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

import { KanbanService } from '../../internal/kanban.service';
import { CardDefDirective } from '../card-def.directive';
import { ColumnDefDirective } from '../column-def.directive';
import {
  ColumnSorter,
  DataFilter,
  defaultColumnSorter,
  defaultDropValidator,
  DropValidator,
  KanbanColumnDefWithTemplate,
  KanbanData,
  KanbanDrop,
} from '../kanban.models';

function _hasChanged(change: SimpleChange): boolean {
  return !!change && change.currentValue !== change.previousValue;
}

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  viewProviders: [KanbanService],
})
export class BoardComponent<T extends KanbanData = KanbanData>
  implements AfterContentChecked, OnDestroy, OnInit, OnChanges {
  private readonly destroy$ = new Subject();

  columns: KanbanColumnDefWithTemplate[] = [];

  @ContentChild(CardDefDirective) cardDef: CardDefDirective;
  @ContentChildren(ColumnDefDirective) columnDefs: QueryList<
    ColumnDefDirective
  >;

  @Input() public data: KanbanData[] = [];
  @Input() public visibleColumns: string[];
  @Input() public dropValidator: DropValidator = defaultDropValidator;
  @Input() public columnSorter: ColumnSorter = defaultColumnSorter;
  @Input() public dataFilter: DataFilter;

  @Output() public readonly cardDrop = new EventEmitter<KanbanDrop<T>>();

  private _updateColumns(): void {
    const columnNames =
      this.visibleColumns ?? this.columnDefs?.map((e) => e.name) ?? [];

    this.columns = columnNames
      .map((name) => this.columnDefs.find((def) => def.name === name))
      .filter((e) => e !== null)
      .map((def) => ({
        ...def,
        cardTemplate: def.cardTemplate ?? this.cardDef?.template,
      }));
  }

  constructor(private kanban: KanbanService) {}

  ngOnInit(): void {
    this.kanban.onDrop$
      .pipe(
        takeUntil(this.destroy$),
        filter((drop: KanbanDrop<T>) => this.dropValidator(drop)),
        tap((drop) => this.cardDrop.emit(drop))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngAfterContentChecked(): void {
    this._updateColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (_hasChanged(changes.visibleColumns)) {
      this._updateColumns();
    }
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHeadingComponent } from './column-heading.component';

describe('ColumnHeadingComponent', () => {
  let component: ColumnHeadingComponent;
  let fixture: ComponentFixture<ColumnHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnHeadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnHeadingComponent);
    component = fixture.componentInstance;
    component.column = { labels: [], name: 'Test' };
    component.data = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

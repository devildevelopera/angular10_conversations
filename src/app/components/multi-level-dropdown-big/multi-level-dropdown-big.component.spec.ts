import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelDropdownBigComponent } from './multi-level-dropdown-big.component';

describe('MultiLevelDropdownBigComponent', () => {
  let component: MultiLevelDropdownBigComponent;
  let fixture: ComponentFixture<MultiLevelDropdownBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLevelDropdownBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelDropdownBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiLevelDropdownComponent } from './muti-level-dropdown.component';

describe('MutiLevelDropdownComponent', () => {
  let component: MutiLevelDropdownComponent;
  let fixture: ComponentFixture<MutiLevelDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiLevelDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiLevelDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

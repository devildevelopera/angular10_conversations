import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsTabComponent } from './actions-tab.component';

describe('ActionsTabComponent', () => {
  let component: ActionsTabComponent;
  let fixture: ComponentFixture<ActionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

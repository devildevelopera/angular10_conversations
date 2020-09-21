import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArActionsComponent } from './ar-actions.component';

describe('ArActionsComponent', () => {
  let component: ArActionsComponent;
  let fixture: ComponentFixture<ArActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

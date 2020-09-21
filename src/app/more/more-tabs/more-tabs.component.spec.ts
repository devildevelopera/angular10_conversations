import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTabsComponent } from './more-tabs.component';

describe('MoreTabsComponent', () => {
  let component: MoreTabsComponent;
  let fixture: ComponentFixture<MoreTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

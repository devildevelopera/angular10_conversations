import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArDetailContentComponent } from './ar-detail-content.component';

describe('ArDetailContentComponent', () => {
  let component: ArDetailContentComponent;
  let fixture: ComponentFixture<ArDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTabsComponent } from './email-tabs.component';

describe('EmailTabsComponent', () => {
  let component: EmailTabsComponent;
  let fixture: ComponentFixture<EmailTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenChatboxComponent } from './open-chatbox.component';

describe('OpenChatboxComponent', () => {
  let component: OpenChatboxComponent;
  let fixture: ComponentFixture<OpenChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTabsComponent } from './voice-tabs.component';

describe('VoiceTabsComponent', () => {
  let component: VoiceTabsComponent;
  let fixture: ComponentFixture<VoiceTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

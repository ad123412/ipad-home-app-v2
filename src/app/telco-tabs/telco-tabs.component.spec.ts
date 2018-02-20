import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelcoTabsComponent } from './telco-tabs.component';

describe('TelcoTabsComponent', () => {
  let component: TelcoTabsComponent;
  let fixture: ComponentFixture<TelcoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelcoTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelcoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

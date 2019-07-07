import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMgmtComponent } from './device-mgmt.component';

describe('DeviceMgmtComponent', () => {
  let component: DeviceMgmtComponent;
  let fixture: ComponentFixture<DeviceMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

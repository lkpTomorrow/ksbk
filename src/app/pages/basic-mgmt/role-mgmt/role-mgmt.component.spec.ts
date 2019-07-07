import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMgmtComponent } from './role-mgmt.component';

describe('RoleMgmtComponent', () => {
  let component: RoleMgmtComponent;
  let fixture: ComponentFixture<RoleMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

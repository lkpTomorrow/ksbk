import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganMgmtComponent } from './organ-mgmt.component';

describe('OrganMgmtComponent', () => {
  let component: OrganMgmtComponent;
  let fixture: ComponentFixture<OrganMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

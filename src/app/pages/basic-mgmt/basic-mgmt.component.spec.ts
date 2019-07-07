import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMgmtComponent } from './basic-mgmt.component';

describe('BasicMgmtComponent', () => {
  let component: BasicMgmtComponent;
  let fixture: ComponentFixture<BasicMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

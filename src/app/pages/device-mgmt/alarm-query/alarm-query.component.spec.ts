import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmQueryComponent } from './alarm-query.component';

describe('AlarmQueryComponent', () => {
  let component: AlarmQueryComponent;
  let fixture: ComponentFixture<AlarmQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

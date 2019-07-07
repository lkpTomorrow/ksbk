import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsTestComponent } from './ks-test.component';

describe('KsTestComponent', () => {
  let component: KsTestComponent;
  let fixture: ComponentFixture<KsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

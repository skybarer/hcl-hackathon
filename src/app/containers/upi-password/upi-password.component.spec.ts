import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiPasswordComponent } from './upi-password.component';

describe('UpiPasswordComponent', () => {
  let component: UpiPasswordComponent;
  let fixture: ComponentFixture<UpiPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

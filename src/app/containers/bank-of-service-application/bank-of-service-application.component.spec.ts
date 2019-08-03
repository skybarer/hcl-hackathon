import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOfServiceApplicationComponent } from './bank-of-service-application.component';

describe('BankOfServiceApplicationComponent', () => {
  let component: BankOfServiceApplicationComponent;
  let fixture: ComponentFixture<BankOfServiceApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOfServiceApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOfServiceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

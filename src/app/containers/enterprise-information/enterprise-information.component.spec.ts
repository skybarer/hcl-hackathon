import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseInformationComponent } from './enterprise-information.component';

describe('EnterpriseInformationComponent', () => {
  let component: EnterpriseInformationComponent;
  let fixture: ComponentFixture<EnterpriseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

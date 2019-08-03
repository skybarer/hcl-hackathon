import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaOffersComponent } from './ola-offers.component';

describe('OlaOffersComponent', () => {
  let component: OlaOffersComponent;
  let fixture: ComponentFixture<OlaOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

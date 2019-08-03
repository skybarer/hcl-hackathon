import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationContactInfoComponent } from './application-contact-info.component';

describe('ApplicationContactInfoComponent', () => {
  let component: ApplicationContactInfoComponent;
  let fixture: ComponentFixture<ApplicationContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

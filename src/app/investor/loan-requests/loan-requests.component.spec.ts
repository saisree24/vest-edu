import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestsComponent } from './loan-requests.component';

describe('LoanRequestsComponent', () => {
  let component: LoanRequestsComponent;
  let fixture: ComponentFixture<LoanRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

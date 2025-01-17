import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentsComponent } from './bill-payments.component';

describe('BillPaymentsComponent', () => {
  let component: BillPaymentsComponent;
  let fixture: ComponentFixture<BillPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

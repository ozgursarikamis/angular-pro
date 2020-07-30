import { TestBed } from '@angular/core/testing';

import { OrderWizardService } from './order-wizard.service';

describe('OrderWizardService', () => {
  let service: OrderWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

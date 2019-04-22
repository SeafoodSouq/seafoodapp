import { TestBed, inject } from '@angular/core/testing';

import { BuyerRouterService } from './buyer-router.service';

describe('BayerRouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerRouterService]
    });
  });

  it('should be created', inject([BuyerRouterService], (service: BuyerRouterService) => {
    expect(service).toBeTruthy();
  }));
});

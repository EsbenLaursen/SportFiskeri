import { TestBed, inject } from '@angular/core/testing';

import { FishService } from './fish.service';

describe('FishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishService]
    });
  });

  it('should ...', inject([FishService], (service: FishService) => {
    expect(service).toBeTruthy();
  }));
});

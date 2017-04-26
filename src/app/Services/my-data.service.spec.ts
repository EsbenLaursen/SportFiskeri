import { TestBed, inject } from '@angular/core/testing';

import { MyDataService } from './my-data.service';

describe('MyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDataService]
    });
  });

  it('should ...', inject([MyDataService], (service: MyDataService) => {
    expect(service).toBeTruthy();
  }));
});

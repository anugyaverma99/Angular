import { TestBed } from '@angular/core/testing';

import { TrainingDetails } from './training-details';

describe('TrainingDetails', () => {
  let service: TrainingDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

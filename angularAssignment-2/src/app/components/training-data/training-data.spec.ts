import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingData } from './training-data';

describe('TrainingData', () => {
  let component: TrainingData;
  let fixture: ComponentFixture<TrainingData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingData],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

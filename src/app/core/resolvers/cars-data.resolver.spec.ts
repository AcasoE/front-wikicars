import { TestBed } from '@angular/core/testing';

import { CarsDataResolver } from './cars-data.resolver';

describe('CarsDataResolver', () => {
  let resolver: CarsDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarsDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

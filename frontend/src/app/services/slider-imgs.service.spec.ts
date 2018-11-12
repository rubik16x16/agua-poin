import { TestBed } from '@angular/core/testing';

import { SliderImgsService } from './slider-imgs.service';

describe('SliderImgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SliderImgsService = TestBed.get(SliderImgsService);
    expect(service).toBeTruthy();
  });
});

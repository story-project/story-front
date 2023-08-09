import { TestBed } from '@angular/core/testing';

import { StoryCartService } from './story-cart.service';

describe('StoryCartService', () => {
  let service: StoryCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

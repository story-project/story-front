import { TestBed } from '@angular/core/testing';

import { AddStoryService } from './add-story.service';

describe('AddStoryService', () => {
  let service: AddStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

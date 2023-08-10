import { TestBed } from '@angular/core/testing';

import { AddPictureService } from './add-picture.service';

describe('AddPictureService', () => {
  let service: AddPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

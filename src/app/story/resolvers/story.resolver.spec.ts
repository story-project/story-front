import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { storyResolver } from './story.resolver';

describe('storyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => storyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

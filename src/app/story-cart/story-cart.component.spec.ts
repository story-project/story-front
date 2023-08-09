import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCartComponent } from './story-cart.component';

describe('StoryCartComponent', () => {
  let component: StoryCartComponent;
  let fixture: ComponentFixture<StoryCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryCartComponent]
    });
    fixture = TestBed.createComponent(StoryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, Input, OnInit} from '@angular/core';
import {StoryService} from "./story.service";
import {StoryCart} from "../story-cart/story-cart";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{
  story!: StoryCart

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute
    ) {
  }
  ngOnInit() {
    this.storyService.getStory(this.route.snapshot.paramMap.get('id')).subscribe((story: any)=>{
      this.story = story
    })
  }
}

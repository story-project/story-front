import {Component, Injectable, Input, OnInit} from '@angular/core';
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
    this.route.data.subscribe(data=>{
      this.story = data['storyResolver']
      console.log(this.story)
    })
  }
}

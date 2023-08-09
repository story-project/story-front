import {Component, Input, OnInit} from '@angular/core';
import {StoryCartService} from "./story-cart.service";
import {StoryCart} from "./story-cart";

@Component({
  selector: 'app-story-cart',
  templateUrl: './story-cart.component.html',
  styleUrls: ['./story-cart.component.scss']
})
export class StoryCartComponent implements OnInit{
  @Input('storyCart') storyCart!: StoryCart
  constructor() {
  }
  ngOnInit() {

  }

}

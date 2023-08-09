import {Component, OnInit} from '@angular/core';
import {StoryCartService} from "../../story-cart/story-cart.service";
import {StoryCart} from "../../story-cart/story-cart";
import {Observable} from "rxjs";
import {CategoryService} from "../../category/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  storyCarts!: any
  categories!: any
  constructor(
    private storyCartService: StoryCartService,
    private categoryService: CategoryService,
    ) {
  }

  ngOnInit() {
    this.storyCartService.getStories().subscribe((storyCarts: any) => {
      this.storyCarts = storyCarts['hydra:member']
      console.log(this.storyCarts)
    })

    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categories = categories['hydra:member']
      console.log(this.categories)
    })
  }

}

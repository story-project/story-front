import {Component, OnInit} from '@angular/core';
import {StoryCartService} from "../../story-cart/story-cart.service";
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
    })

    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categories = categories['hydra:member']
    })
  }

  getCategoryId(categoryId: number) {
    this.storyCartService.getStories(`?category=${categoryId}`).subscribe((res: any)=>{
      this.storyCarts = res['hydra:member']
    })
  }

  // getStoryId(storyId: number) {
  //   this.storyComponent.getStoryProcces(storyId)
  // }

  getAllStories() {
    this.storyCartService.getStories().subscribe((storyCarts: any) => {
      this.storyCarts = storyCarts['hydra:member']
    })
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Category} from "./category";
import {StoryCartService} from "../story-cart/story-cart.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  @Input('category') category!: Category

  constructor(private storyCartService: StoryCartService) {
  }

  ngOnInit() {

  }
  // getCategoryId() {
  //   this.storyCartService.getStories(`?category=${this.category.id}`).subscribe((res: any)=>{
  //     console.log(res['hydra:member'])
  //   })
  // }
}

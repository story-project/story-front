import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStoryComponent } from './add-story.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: AddStoryComponent
  }
]

@NgModule({
  declarations: [
    AddStoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AddStoryModule { }
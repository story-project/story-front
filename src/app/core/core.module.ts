import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SharedModule} from "../shared/shared.module";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {StoryCartComponent} from "../story-cart/story-cart.component";
import {AuthInterceptor} from "../auth/auth.interceptor";
import {CategoryComponent} from "../category/category.component";



@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    MainContentComponent,
    NavbarComponent,
    StoryCartComponent,
    CategoryComponent
  ],
  exports: [
    NavbarComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class CoreModule { }

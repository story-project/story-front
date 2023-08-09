import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'story/:id',
    loadChildren: () => import('./story/story.module').then(m=>m.StoryModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found-page/not-found-page.module').then(m=>m.NotFoundPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

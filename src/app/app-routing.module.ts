import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {authCanmatchGuard, authCantmatchGuard} from "./auth/guards/auth-canmatch.guard";
import {storyResolver} from "./story/resolvers/story.resolver";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'story/:id',
    loadChildren: () => import('./story/story.module').then(m=>m.StoryModule),
    resolve: {
      storyResolver: storyResolver
    },
    canMatch: [authCanmatchGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule),
    canMatch: [authCantmatchGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path: 'add-story',
    loadChildren: () => import('./add-story/add-story.module').then(m=>m.AddStoryModule),
    canMatch: [authCanmatchGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: '**',
    loadChildren: () => import('./not-found-page/not-found-page.module').then(m=>m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

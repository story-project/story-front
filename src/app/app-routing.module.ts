import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {authCanmatchGuard, authCantmatchGuard} from "./auth/guards/auth-canmatch.guard";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canMatch: [authCanmatchGuard]
  },
  {
    path: 'category/:id',
    component: HomeComponent,
    canMatch: [authCanmatchGuard]
  },
  {
    path: 'story/:id',
    loadChildren: () => import('./story/story.module').then(m=>m.StoryModule)
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

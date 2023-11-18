import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from '../movies/pages/movies-page/movies-page.component';
import { ProfilePageComponent } from '../profile/pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesPageComponent,
    loadChildren: () => import(`../movies/movies.module`).then(m => m.MoviesModule),
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    loadChildren: () => import(`../profile/profile.module`).then(m => m.ProfileModule),
  },
  {
    path: '**',
    redirectTo: '/movies'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
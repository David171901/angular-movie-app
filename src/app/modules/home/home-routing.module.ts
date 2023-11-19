import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from '@modules/profile/pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () => import(`../movies/movies.module`).then(m => m.MoviesModule),
      },
      {
        path: 'series',
        loadChildren: () => import(`../series/series.module`).then(m => m.SeriesModule),
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
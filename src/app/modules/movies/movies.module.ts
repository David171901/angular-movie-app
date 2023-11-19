import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';


@NgModule({
  declarations: [
    MoviesPageComponent,
    MovieDetailPageComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class MoviesModule { }

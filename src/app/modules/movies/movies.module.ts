import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MoviesRoutingModule } from './movies-routing.module';


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

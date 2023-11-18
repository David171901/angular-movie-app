import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormErrorsPipe } from './pipe/form-errors.pipe';
import { MovieCardComponent } from './components/movie-card/movie-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormErrorsPipe,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FormErrorsPipe,
    MovieCardComponent,
  ]
})
export class SharedModule { }

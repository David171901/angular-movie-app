import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormErrorsPipe } from './pipe/form-errors.pipe';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import { NotFoundMessageComponent } from './components/not-found-message/not-found-message.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormErrorsPipe,
    MovieCardComponent,
    CheckboxListComponent,
    NotFoundMessageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FormErrorsPipe,
    MovieCardComponent,
    CheckboxListComponent,
    NotFoundMessageComponent,
  ]
})
export class SharedModule { }

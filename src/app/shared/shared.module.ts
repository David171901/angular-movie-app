import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import { NotFoundMessageComponent } from './components/not-found-message/not-found-message.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FormErrorsPipe,
    CheckboxListComponent,
    NotFoundMessageComponent,
    LoaderComponent,
    CardComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FormErrorsPipe,
    CheckboxListComponent,
    NotFoundMessageComponent,
    LoaderComponent,
    CardComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SerieDetailPageComponent } from './pages/serie-detail-page/serie-detail-page.component';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    SerieDetailPageComponent,
       SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class SeriesModule { }

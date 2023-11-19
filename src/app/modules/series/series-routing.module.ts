import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { SerieDetailPageComponent } from './pages/serie-detail-page/serie-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesPageComponent,
  },
  {
    path: 'detail/:serieId',
    component: SerieDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }

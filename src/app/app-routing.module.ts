import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from '@core/guards/session.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate:[sessionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

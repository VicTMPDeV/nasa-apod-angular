import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path:'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailModule)
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch:'full'
  },
  {
    path:'**', redirectTo: 'dashboard', pathMatch:'full' //poner componente notfound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

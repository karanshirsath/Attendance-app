import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-new-user',
    loadChildren: () => import('./create-new-user/create-new-user.module').then( m => m.CreateNewUserPageModule)
  },
  {
    path: 'attendance-dashboard',
    loadChildren: () => import('./attendance-dashboard/attendance-dashboard.module').then( m => m.AttendanceDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/auth/login/login.component';
import { AuthGuard } from './admin/auth/auth.guard';

const appRoutes: Routes= [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'admin/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

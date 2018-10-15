import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'notas', component: NotasComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

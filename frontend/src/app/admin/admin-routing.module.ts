import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'notas',
        loadChildren: './notas/notas.module#NotasModule'
      },
      {
        path: 'productos',
        loadChildren: './productos/productos.module#ProductosModule'
      },
      {
        path: 'pedidos',
        loadChildren: './pedidos/pedidos.module#PedidosModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

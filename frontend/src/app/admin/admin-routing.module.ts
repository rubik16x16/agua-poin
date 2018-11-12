import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuard],
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
      },
      {
        path: 'promociones',
        loadChildren: './promociones/promociones.module#PromocionesModule'
      },
      {
        path: 'slider',
        loadChildren: './slider/slider.module#SliderModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

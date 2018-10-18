import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  declarations: [PedidosComponent]
})
export class PedidosModule { }

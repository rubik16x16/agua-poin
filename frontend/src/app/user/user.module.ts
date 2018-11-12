import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NotasComponent } from './notas/notas.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { HelpersModule } from '../helpers/helpers.module';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HelpersModule
  ],
  declarations: [UserComponent, NotasComponent, ProductosComponent, PedidosComponent, PromocionesComponent, SliderComponent]
})
export class UserModule { }

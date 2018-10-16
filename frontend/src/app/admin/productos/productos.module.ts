import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  declarations: [ProductosComponent, CreateComponent, EditComponent, ShowComponent]
})
export class ProductosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PromocionesRoutingModule } from './promociones-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PromocionesComponent } from './promociones.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PromocionesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent, EditComponent, PromocionesComponent]
})
export class PromocionesModule { }

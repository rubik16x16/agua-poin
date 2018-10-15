import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports: [
    CommonModule,
    NotasRoutingModule,
    FormsModule
  ],
  declarations: [NotasComponent, CreateComponent, EditComponent, ShowComponent]
})
export class NotasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    SliderRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SliderComponent, CreateComponent, EditComponent]
})
export class SliderModule { }

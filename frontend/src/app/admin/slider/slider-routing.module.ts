import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from '../slider/create/create.component';
import { EditComponent } from '../slider/edit/edit.component';
import { SliderComponent } from './slider.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }

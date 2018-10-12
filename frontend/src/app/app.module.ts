import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'popper.js';
import 'bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

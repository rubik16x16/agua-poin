import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NotasService } from '../../../services/notas.service';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  titulo: string;
  cuerpo: string;

  constructor(
    private notasService: NotasService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  private storeNota(){

    let nota= new Nota(0, this.titulo, this.cuerpo, 'imgx');

    this.notasService.storeNota(nota).subscribe(_ => this.goBack());
  }//end storeNota

  private goBack(): void {

    this.location.back();
  }//end goBack
}//end CreateComponent class

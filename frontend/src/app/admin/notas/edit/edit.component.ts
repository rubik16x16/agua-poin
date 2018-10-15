import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { NotasService } from '../../../services/notas.service';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  titulo: string;
  cuerpo: string;

  constructor(
    private route: ActivatedRoute,
    private notasService: NotasService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getNota();
  }//end ngOnInit

  private getNota(){

    const id = +this.route.snapshot.paramMap.get('id');
    this.notasService.getNota(id).subscribe(nota => {
      this.id= nota.id;
      this.titulo= nota.titulo;
      this.cuerpo= nota.cuerpo;
    });
  }//end getNota

  private updateNota(){

    this.notasService.updateNota(this.id, new Nota(this.id, this.titulo, this.cuerpo, 'imgx'))
      .subscribe(_ => this.goBack());
  }//end updateNota

  private goBack(): void {

    this.location.back();
  }//end goBack
}

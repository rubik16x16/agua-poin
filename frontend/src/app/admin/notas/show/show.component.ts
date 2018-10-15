import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotasService } from '../../../services/notas.service';
import { Nota } from '../../../models/nota';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  nota: Nota;

  constructor(
    private notasService: NotasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getNota();
  }//end ngOnInit

  private getNota(){

    const id = +this.route.snapshot.paramMap.get('id');
    this.notasService.getNota(id).subscribe(nota => this.nota= new Nota(nota.id, nota.titulo, nota.cuerpo, nota.img));
  }//end getNota
}//end ShowComponent

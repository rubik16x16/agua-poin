import { Component, OnInit } from '@angular/core';

import { NotasService } from '../../services/notas.service';
import { Nota } from '../../models/nota';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  notas: Array<Nota>= [];

  constructor(
    private notasService: NotasService
  ) { }

  ngOnInit() {

    this.getNotas();
  }//end ngOnInit

  private getNotas(): void{

    this.notasService.getNotas().subscribe(notas => {

      for(let nota of notas){

        this.notas.push(new Nota(nota.id, nota.titulo, nota.cuerpo, nota.img, null));
      }
    });
  }//end getNotas

  private deleteNota(id: number): void{

    this.notas= this.notas.filter(nota => nota.getId() != id);
    this.notasService.deleteNota(id).subscribe();
  }//end deleteNota
}//end NotasComponent

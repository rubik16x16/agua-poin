import { Component, OnInit } from '@angular/core';

import { PromocionesService } from '../../services/promociones.service';
import { Promocion } from '../../models/promocion';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

  private promociones: Array<Promocion> = [];

  constructor(
    private promocionesService: PromocionesService
  ) { }

  ngOnInit() {
    this.getPromociones();
  }//end ngOnInit

  private getPromociones(): void{

    this.promocionesService.getPromociones().subscribe(
      promociones => {
        for(let promocion of promociones){
          this.promociones.push(new Promocion(promocion.id, promocion.nombre, promocion.img, null ));
        }
      }//end closore
    );
  }//end getPromociones
}//end PromocionesComponent class

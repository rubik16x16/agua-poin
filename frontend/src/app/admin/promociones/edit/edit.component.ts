import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PromocionesService } from '../../../services/promociones.service';
import { Promocion } from '../../../models/promocion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private id: number;
  private nombre: string;
  private img: string;

  constructor(
    private route: ActivatedRoute,
    private promocionesService: PromocionesService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getPromocion();
  }

  private getPromocion(): void{

    const id = +this.route.snapshot.paramMap.get('id');

    this.promocionesService.getPromocion(id).subscribe(promocion => {
      this.id= promocion.id;
      this.nombre= promocion.nombre;
      this.img= promocion.img;
    });
  }//end getPromocion

  private updatePromocion(): void{

    this.promocionesService.updatePromocion(this.id, new Promocion(this.id, this.nombre, this.img))
      .subscribe(_ => this.goBack());
  }//end updatePromocion

  private goBack(): void {

    this.location.back();
  }//end goBack
}//end EditComponent class

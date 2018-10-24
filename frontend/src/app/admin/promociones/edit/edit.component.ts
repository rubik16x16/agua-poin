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
  private imgName: string;
  private fileUrl: string;
  private fileToUpload: File = null;

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
      this.imgName= promocion.img;
    });
  }//end getPromocion

  private updatePromocion(): void{

    let promocion= new Promocion(this.id, this.nombre, '', this.fileToUpload);

    this.promocionesService.updatePromocion(this.id, promocion).subscribe(
      _ => this.goBack()
      );
  }//end updatePromocion

  private onSelectFile(event) { // called each time file input changes

    if (event.target.files && event.target.files[0]) {

      this.fileToUpload = event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.fileUrl = event.target.result;
      }//end closure
    }//end if
  }//end onSelectFile

  private goBack(): void {

    this.location.back();
  }//end goBack
}//end EditComponent class

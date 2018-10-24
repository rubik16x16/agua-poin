import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PromocionesService } from '../../../services/promociones.service';
import { Promocion } from '../../../models/promocion';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private nombre: string;
  private fileUrl: string;
  private fileToUpload: File = null;

  constructor(
    private promocionesService: PromocionesService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  private storePromocion(){

    let promocion= new Promocion(0, this.nombre, '', this.fileToUpload);

    this.promocionesService.storePromocion(promocion).subscribe(
      _ => this.goBack()
    );
  }//end storePromocion

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
}//end CreateComponent class


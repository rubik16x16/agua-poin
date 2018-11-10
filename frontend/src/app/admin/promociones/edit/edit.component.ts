import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { PromocionesService } from '../../../services/promociones.service';
import { Promocion } from '../../../models/promocion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private fileUrl: string;
  private fileToUpload: File = null;
  private id: number;

  private promocionForm= new FormGroup({
    media: new FormGroup({
      type: new FormControl(),
      src: new FormControl()
    }),
    nombre: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private promocionesService: PromocionesService,
    private location: Location
  ) { }

  ngOnInit() {

    this.id= +this.route.snapshot.paramMap.get('id');
    this.getPromocion();
  }

  private getPromocion(): void{

    this.promocionesService.getPromocion(this.id).subscribe(
      promocion => {
        this.promocionForm.controls.nombre.setValue(promocion.getNombre());
        let media: FormGroup= this.promocionForm.controls.media as FormGroup;
        media.controls.type.setValue(promocion.getMedia());
        if(promocion.getMedia() == 'video'){
          media.controls.src.setValue(promocion.getSrc());
        }else{
          this.fileUrl= `http://localhost/agua-poin/public/storage/${promocion.getSrc()}`;
        }
      }
    );
  }//end getPromocion

  private updatePromocion(): void{

    let promocionData= this.promocionForm.value;

    let promocion= new Promocion(0, promocionData.nombre, promocionData.media.type,
      promocionData.media.src, this.fileToUpload);

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

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

  private titulo: string;
  private cuerpo: string;
  private fileUrl: string;
  private fileToUpload: File = null;

  constructor(
    private notasService: NotasService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  private storeNota(): void{

    let nota= new Nota(0, this.titulo, this.cuerpo, '', this.fileToUpload);

    this.notasService.storeNota(nota).subscribe(
      _ => this.goBack()
    );
  }//end storeNota

  private onSelectFile(event): void{ // called each time file input changes

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

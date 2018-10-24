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

  private id: number;
  private titulo: string;
  private cuerpo: string;
  private imgName: string;
  private fileUrl: string;
  private fileToUpload: File = null;

  constructor(
    private route: ActivatedRoute,
    private notasService: NotasService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getNota();
  }//end ngOnInit

  private getNota(): void{

    const id = +this.route.snapshot.paramMap.get('id');
    this.notasService.getNota(id).subscribe(nota => {
      this.id= nota.id;
      this.titulo= nota.titulo;
      this.cuerpo= nota.cuerpo;
      this.imgName= nota.img;
    });
  }//end getNota

  private updateNota(): void{

    let nota: Nota= new Nota(this.id, this.titulo, this.cuerpo, '', this.fileToUpload);

    this.notasService.updateNota(this.id, nota).subscribe(
      _ => this.goBack()
    );
  }//end updateNota

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
}

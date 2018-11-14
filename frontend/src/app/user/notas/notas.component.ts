import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { NotasService } from './../../services/notas.service';
import { Nota } from '../../models/nota';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  notas: Array<Nota[]>= [];

  constructor(
    private notasService: NotasService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(){

    this.getNotas();
  }//end ngOnInit

  private getNotas(): void{

    this.notasService.getNotas().subscribe(
      notas => {
        let notasLeft: Array<Nota>= [];
        let notasRight: Array<Nota>= [];
        let i: number= 1;
        for(let nota of notas){
          if(i % 2 == 0){

            notasLeft.push(nota);
          }else{

            notasRight.push(nota);
          }//end else
          i++;
        }//end for
        this.notas= [notasRight, notasLeft];
        console.log(this.notas);
      }
    )
  }//end getNotas

  private updateVideoUrl(id: string): SafeUrl{

    let videoUrl= 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }//end updateVideoUrl
}//end NotasComponent class

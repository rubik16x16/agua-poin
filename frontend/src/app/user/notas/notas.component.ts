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

  notas: Array<Nota>= [];

  constructor(
    private notasService: NotasService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(){

    this.getNotas();
  }//end ngOnInit

  private getNotas(): void{

    this.notasService.getNotas().subscribe(
      notas => this.notas= notas
    )
  }//end getNotas

  private updateVideoUrl(id: string): SafeUrl{

    let videoUrl= 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }//end updateVideoUrl
}//end NotasComponent class

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { PromocionesService } from '../../services/promociones.service';
import { Promocion } from '../../models/promocion';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

  private promociones: Array<Promocion>;

  constructor(
    private promocionesService: PromocionesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.getPromociones();
  }

  private getPromociones(): void{

    this.promocionesService.getPromociones().subscribe(
      promociones =>{

        this.promociones= promociones;
      }
    );
  }//end getPromociones

  private deletePromocion(id: number): void{

    this.promociones= this.promociones.filter(nota => nota.getId() != id);
    this.promocionesService.deletePromocion(id).subscribe();
  }//end deletePromocion

  private updateVideoUrl(id: string): SafeUrl{

    let videoUrl= 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}//end PromocionesComponent

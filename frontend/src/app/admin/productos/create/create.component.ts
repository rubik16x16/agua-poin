import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private nombre: string;
  private precio: number;
  private fileToUpload: File;
  private fileUrl: string;

  constructor(
    private productosService: ProductosService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  private storeProducto(){

    let producto= new Producto(0, this.nombre, this.precio, '', this.fileToUpload);

    this.productosService.storeProducto(producto).subscribe(
      _ => this.goBack()
    );
  }//end storeProducto

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
}//end CreateComponent

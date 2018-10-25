import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private id: number;
  private nombre: string;
  private precio: number;
  private imgName: string;
  private fileToUpload: File;
  private fileUrl: string;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getProducto();
  }//end ngOnInit

  private getProducto(): void{

    const id = +this.route.snapshot.paramMap.get('id');

    this.productosService.getProducto(id).subscribe(
      producto => {
        this.id= producto.id;
        this.nombre= producto.nombre;
        this.precio= producto.precio;
        this.imgName= producto.img;
        this.fileUrl= `http://localhost/agua-poin/public/storage/${ producto.img }`;
      });
  }//end getProducto

  private updateProducto(): void{

    let producto: Producto= new Producto(this.id, this.nombre, this.precio, '', this.fileToUpload);

    this.productosService.updateProducto(this.id, producto).subscribe(
      _ => this.goBack()
    );
  }//end updateProducto

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

}

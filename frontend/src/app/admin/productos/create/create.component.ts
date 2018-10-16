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

  constructor(
    private productosService: ProductosService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  private storeProducto(){

    let producto= new Producto(0, this.nombre, this.precio, 'imgx');
    this.productosService.storeProducto(producto).subscribe(
      _ => this.goBack()
    );
  }//end storeProducto

  private goBack(): void {

    this.location.back();
  }//end goBack
}//end CreateComponent

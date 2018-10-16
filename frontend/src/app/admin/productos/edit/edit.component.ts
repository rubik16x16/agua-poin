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

  private id;
  private nombre;
  private precio;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private location: Location
  ) { }

  ngOnInit() {

    this.getProducto();
  }//end ngOnInit

  private getProducto(){

    const id = +this.route.snapshot.paramMap.get('id');

    this.productosService.getProducto(id).subscribe(producto => {
      this.id= producto.id;
      this.nombre= producto.nombre;
      this.precio= producto.precio;
    });
  }//end getProducto

  private updateProducto(){

    this.productosService.updateProducto(this.id, new Producto(this.id, this.nombre, this.precio, 'imgx'))
      .subscribe(_ => this.goBack());
  }//end updateProducto

  private goBack(): void {

    this.location.back();
  }//end goBack

}

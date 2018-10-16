import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  private producto: Producto;

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getProducto();
  }//end ngOnInit

  private getProducto(){

    const id = +this.route.snapshot.paramMap.get('id');

    this.productosService.getProducto(id).subscribe(producto => {
      this.producto= new Producto(producto.id, producto.nombre, producto.precio, producto.img);
    });
  }//end getProducto
}//end ShowComponent class

import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  private productos: Array<Producto>= [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit() {

    this.getProductos();
  }//end ngOnInit

  getProductos(){

    this.productosService.getProductos().subscribe(
      productos => {
        for(let producto of productos){
          this.productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.img));
        }
        console.log(this.productos);
      }
    );
  }//end getProductos
}//end PedidosComponent class

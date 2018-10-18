import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  private productos: Array<Producto>= [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void{

    let loader = document.getElementById("preloader");

    this.productosService.getProductos().subscribe(
      productos => {
        for(let producto of productos){
          this.productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.img));
        }
        loader.className= 'preloader fade-out';
      }
    );
  }

  deleteProducto(id): void{

    this.productos= this.productos.filter(producto => producto.getId() !== id);
    this.productosService.deleteProducto(id).subscribe();
  }

}

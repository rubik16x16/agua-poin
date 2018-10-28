import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { PedidosService } from '../../services/pedidos.service';
import { Producto } from '../../models/producto';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  private productos: Array<Producto>= [];

  private nombre: string;
  private telefono: string;
  private direccion: string;
  private producto: Producto;
  private cantidad: number;
  private horario: string;

  private preloader: any;
  private preloaderText: any;

  constructor(
    private productosService: ProductosService,
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {

    this.getProductos();
  }//end ngOnInit

  private getProductos(): void{

    this.preloaderText= document.getElementById('preloader-text');
    this.preloader= document.getElementById('preloader');

    this.preloaderText.classList.toggle('fade-out');
    this.preloader.classList.toggle('fade-out');

    this.productosService.getProductos().subscribe(
      productos => {
        for(let producto of productos){
          this.productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.img, null));
        }//end for
      }//end closure 
    );
  }//end getProductos

  private addPedido(): void{

    if(!this.preloaderText.classList.contains('fade-out')){

      this.preloaderText.classList.toggle('fade-out');
    }//end if

    this.preloader.classList.toggle('fade-out');

    this.pedidosService.storePedido(new Pedido(
      0, this.nombre, this.telefono,
      this.direccion, this.producto, this.cantidad,
      this.horario)).subscribe(
        pedido => {
          this.preloader.classList.toggle('fade-out');
          this.preloaderText.classList.toggle('fade-out');
          console.log(pedido);
        }//end closore
      );
  }//end addPedido
}//end PedidosComponent class

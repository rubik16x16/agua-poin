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

  constructor(
    private productosService: ProductosService,
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {

    this.getProductos();
  }//end ngOnInit

  private getProductos(): void{

    this.productosService.getProductos().subscribe(
      productos => {
        for(let producto of productos){
          this.productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.img));
        }
      }
    );
  }//end getProductos

  private addPedido(): void{

    this.pedidosService.storePedido(new Pedido(
      0, this.nombre, this.telefono,
      this.direccion, this.producto, this.cantidad,
      this.horario)).subscribe(
        pedido => console.log(pedido);
      );
  }//end addPedido
}//end PedidosComponent class

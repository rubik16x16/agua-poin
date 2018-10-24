import { Component, OnInit } from '@angular/core';

import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedido';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  private pedidos: Array<Pedido>= [];

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {
    this.getPedidos();
  }//end ngOnInit

  private getPedidos(): void{

    this.pedidosService.getPedidos().subscribe(
      pedidos => {

        for(let pedido of pedidos){

          let dataProducto= pedido.producto;
          let producto= new Producto(
            dataProducto.id, dataProducto.nombre, dataProducto.precio,
            dataProducto.img, null
          );

          this.pedidos.push(new Pedido(
            pedido.id, pedido.nombre, pedido.telefono, pedido.direccion,
            producto, pedido.cantidad, pedido.horario));
        }//end for
      }//end closure
    );
  }//end getPedidos
}//end PedidosComponent

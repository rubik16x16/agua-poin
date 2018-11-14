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

  private pedidos: Array<Pedido>;

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {
    this.getPedidos();
  }//end ngOnInit

  private getPedidos(): void{

    this.pedidosService.getPedidos().subscribe(
      pedidos => {

        this.pedidos= pedidos;
      }//end closure
    );
  }//end getPedidos

  private deletePedido(id: number): void{

    this.pedidos= this.pedidos.filter(nota => nota.getId() != id);
    this.pedidosService.deletePedido(id).subscribe();
  }//end deletePedido
}//end PedidosComponent

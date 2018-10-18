<?php

use Illuminate\Database\Seeder;
use App\Models\Pedido;

class PedidosTableSeeder extends Seeder{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(){

    for($i=1; $i<10; $i++){

      $pedido= new Pedido([
        'nombre' => "Cliente pedido {$i}",
        'telefono' => '123',
        'direccion' => "Direccion pedido {$i}",
        'producto_id' => 1,
        'cantidad' => 10,
        'horario' => 'mañana'
      ]);

      $pedido->save();
    }//end for
  }//end run
}//end PedidosTableSeeder

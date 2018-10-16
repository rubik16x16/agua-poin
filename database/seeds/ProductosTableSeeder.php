<?php

use Illuminate\Database\Seeder;

use App\Models\Producto;

class ProductosTableSeeder extends Seeder{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(){

    for($i=1; $i<10; $i++){
      $producto= new Producto([
        'nombre' => "producto {$i}",
        'precio' => 200,
        'img' => 'imgx'
      ]);
      $producto->save();
    }//end for
  }//end run
}//end ProductosTableSeeder

<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run(){

    $this->call(NotasTableSeeder::class);
    $this->call(ProductosTableSeeder::class);
    $this->call(PedidosTableSeeder::class);
  }//end run
}//end DatabaseSeeder

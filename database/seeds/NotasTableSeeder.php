<?php

use Illuminate\Database\Seeder;
use App\Models\Nota;

class NotasTableSeeder extends Seeder{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(){

    for($i= 1; $i<10; $i++){

      $nota= new Nota([
        'titulo' => "Titulo nota {$i}",
        'cuerpo' => "Cuerpo nota {$i}",
        'img' => "imagen nota {$i}"
      ]);
      $nota->save();
    }//end for
  }//end run
}//end NotasTableSeeder class

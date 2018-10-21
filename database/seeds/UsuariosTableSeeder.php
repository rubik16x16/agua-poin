<?php

use Illuminate\Database\Seeder;

use App\Models\Usuario;

class UsuariosTableSeeder extends Seeder{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(){

    $usuario= new Usuario([
      'correo' => 'admin@gmail.com',
      'clave' => '123'
    ]);

    $usuario->save();
  }//end run
}//end UsuariosTableSeeder

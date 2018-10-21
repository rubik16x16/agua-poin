<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){

    Schema::create('usuarios', function (Blueprint $table) {
        $table->increments('id');
        $table->string('correo');
        $table->string('clave');
        $table->boolean('estado')->default(true);
        $table->timestamps();
    });
  }//end up

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(){

    Schema::dropIfExists('usuarios');
  }//end down
}//end CreateUsuariosTable

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedidosTable extends Migration{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){

    Schema::create('pedidos', function (Blueprint $table) {

      $table->increments('id');
      $table->string('nombre');
      $table->string('telefono');
      $table->string('direccion');
      $table->unsignedInteger('producto_id');
      $table->foreign('producto_id')->references('id')->on('productos')->onDelete('cascade')->onUpdate('cascade');
      $table->integer('cantidad');
      $table->enum('horario', ['mañana', 'tarde', 'noche']);
      $table->timestamps();
    });
  }//end up

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(){

    Schema::dropIfExists('pedidos');
  }//end down
}//end CreatePedidosTable class

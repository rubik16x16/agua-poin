<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){

    Schema::create('productos', function (Blueprint $table){
      
        $table->increments('id');
        $table->string('nombre');
        $table->string('precio');
        $table->string('img');
        $table->timestamps();
    });
  }//end up

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(){

    Schema::dropIfExists('productos');
  }//end down
}//end CreateProductosTable class

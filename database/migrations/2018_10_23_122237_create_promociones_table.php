<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePromocionesTable extends Migration{

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){

    Schema::create('promociones', function (Blueprint $table) {
      $table->increments('id');
      $table->string('nombre');
      $table->string('media');
      $table->string('src');
      $table->timestamps();
    });
  }//end up

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(){

    Schema::dropIfExists('promociones');
  }//end down
}//end CreatePromocionesTable class

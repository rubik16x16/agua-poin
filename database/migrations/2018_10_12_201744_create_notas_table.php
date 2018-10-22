<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotasTable extends Migration{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){

    Schema::create('notas', function (Blueprint $table) {
      $table->increments('id');
      $table->string('titulo');
      $table->text('cuerpo');
      $table->string('img');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(){

    Schema::dropIfExists('notas');
  }
}

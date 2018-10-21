<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model{

  protected $table= 'usuarios';
  protected $fillable= ['correo', 'clave'];

  protected $hidden= ['clave'];
}//end Usuario class

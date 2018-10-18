<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model{

  protected $table= 'pedidos';
  protected $fillable= [
    'nombre', 'telefono', 'direccion',
    'producto_id', 'cantidad', 'horario'
  ];

  public function producto(){

    return $this->belongsTo('App\Models\Producto');
  }

}

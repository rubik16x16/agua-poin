<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class PedidosController extends Controller{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(){

    $meses= [
      'enero', 'febrero', 'marzo', 'abril',
      'mayo', 'junio', 'julio', 'agosto',
      'septiembre', 'octubre', 'noviembre',
      'diciembre'
    ];

    $pedidos= Pedido::all()->load('producto');
    
    $pedidos->each(function($pedido) use ($meses){
      $date= new \DateTime($pedido->created_at);
      $pedido->fecha= sprintf('%d de %s de %s',$date->format('d'), $meses[$date->format('m') - 1], $date->format('Y'));
    });

    return response()->json($pedidos);
  }//end index

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){

    $pedido= new Pedido($request->all());
    $pedido->producto_id= $request->producto['id'];
    $pedido->save();
    return response()->json($pedido->toArray());
  }//end store

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id){

    return response()->json(Pedido::find($id)->toArray());
  }//end show

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id){

    $pedido= Pedido::find($id);
    $pedido->fill($request->all());
    $pedido->save();
  }//end update

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id){

    Pedido::destroy($id);
  }//end destroy
}//end PedidosController class

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Producto;

class ProductosController extends Controller{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(){

    return response()->json(Producto::all()->toArray());
  }//end index

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){

    $producto= new Producto($request->all());
    $producto->save();
    return response()->json($producto->toArray());
  }//end store

  public function storeImg(Request $request, $id){

    $producto= Producto::find($id);
    $producto->img = $request->file('img')->store('imgs/productos', 'public');
    $producto->save();
  }//end storeImg

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id){

    return response()->json(Producto::find($id));
  }//end show

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id){

    $producto= Producto::find($id);
    $producto->fill($request->all());
    $producto->save();
  }//end update

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id){

    Producto::destroy($id);
  }//end destroy
}//end ProductosController class

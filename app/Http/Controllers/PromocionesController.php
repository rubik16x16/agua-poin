<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Promocion;
use Illuminate\Support\Facades\Storage;

class PromocionesController extends Controller{

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(){

    return response()->json(Promocion::all()->toArray());
  }//end index

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){

    // $promocion= new Promocion($request->all());
    // $promocion->save();
    // return response()->json($promocion->toArray());
  }//end store

  public function storeImg(Request $request, $id){

    $promocion= Promocion::find($id);
    $promocion->img = $request->file('img')->store('imgs/promociones', 'public');
    $promocion->save();
  }//end storeImg

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id){

    $promocion= Promocion::find($id);
    return response()->json($promocion->toArray());
  }//end show

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id){

    $promocion= Promocion::find($id);
    $promocion->fill($request->all());
    $promocion->save();
  }//end update

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id){
    
    $promocion= Promocion::find($id);
    Storage::disk('public')->delete($promocion->img);
    $promocion->delete();
  }//end destroy
}//end PromocionesController class

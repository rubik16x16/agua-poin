<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Nota;

class NotasController extends Controller{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(){

    return response()->json(Nota::all()->toArray());
  }//end index

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request){

    $nota= new Nota($request->all());
    $nota->img = $request->file('img')->store('/imgs/notas', 'public');
    $nota->save();
    return response()->json($nota->toArray());
  }//end Store

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id){

    return response()->json(Nota::find($id)->toArray());
  }//end show

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id){

    $nota= Nota::find($id);
    $nota->fill($request->all());

    if($request->file('img') !== NULL){

      Storage::disk('public')->delete($nota->img);
      $nota->img = $request->file('img')->store('imgs/notas', 'public');
    }//end if

    $nota->save();
  }//end update

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id){

    $nota= Nota::find($id);
    Storage::disk('public')->delete($nota->img);
    $nota->delete();
  }//end destroy
}//end NotasController

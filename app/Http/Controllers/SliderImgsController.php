<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SliderImg;
use Illuminate\Support\Facades\Storage;

class SliderImgsController extends Controller{

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(){
		
		return response()->json(SliderImg::all()->toArray());
	}// end index

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request){

    $sliderImg= new SliderImg($request->all());
    $sliderImg->src= $request->file('src')->store('imgs/slider', 'public');
    $sliderImg->save();

    return response()->json($sliderImg->toArray());
	}//end store

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id){
    
    return response()->json(SliderImg::find($id)->toArray());
	}//end show

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id){
    
    $sliderImg= SliderImg::find($id);
    $sliderImg->fill($request->all());

    if($request->file('src') !== NULL){

      Storage::disk('public')->delete($sliderImg->src);
      $sliderImg->src = $request->file('src')->store('imgs/slider', 'public');
    }//end if
    $sliderImg->save();
	}//end update

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id){
    
    $sliderImg= SliderImg::find($id);
    Storage::disk('public')->delete($sliderImg->src);
	}//end destroy
}//end SliderImgsController class

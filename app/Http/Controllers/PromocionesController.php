<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Promocion;
use Illuminate\Support\Facades\Storage;

class PromocionesController extends Controller{

	public function test(Request $request){

		$videoId= substr(strrchr($request->str, '='), 1);
		return $videoId;
	}

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

		$promocion= new Promocion($request->all());
		if($promocion->media == 'imagen'){

			$promocion->src= $request->file('src')->store('imgs/promociones', 'public');
		}else{

			$promocion->src= substr(strrchr($request->src, '='), 1);
		}
		$promocion->save();
		return response()->json($promocion->toArray());
	}//end store

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
		if($request->media == 'imagen'){
			
			if($promocion->media == 'imagen'){

				if($request->file('src') !== NULL){

					Storage::disk('public')->delete($promocion->src);
					$promocion->src = $request->file('src')->store('imgs/promociones', 'public');
				}//end if
			}else{

        Storage::disk('public')->delete($promocion->src);
				$promocion->src= $request->file('src')->store('imgs/promociones', 'public');
			}//end else
		}else{

			if($promocion->media == 'imagen'){

				Storage::disk('public')->delete($promocion->src);
			}
			$promocion->src= substr(strrchr($request->src, '='), 1);
		}//end else

		$promocion->fill($request->except(['src']));
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
		if($promocion->media == 'imagen'){

			Storage::disk('public')->delete($promocion->img);
		}//end if
		$promocion->delete();
	}//end destroy
}//end PromocionesController class

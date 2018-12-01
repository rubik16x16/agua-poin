<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Nota;

class NotasController extends Controller{
  
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct(){

    $this->middleware('api-auth')->except('index');
  }

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
		if($request->media == 'imagen'){

			$nota->src = $request->file('src')->store('/imgs/notas', 'public');
		}else{
		
			$nota->src= substr(strrchr($request->src, '='), 1);
		}
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
		if($request->media == 'imagen'){
			
			if($nota->media == 'imagen'){

				if($request->file('src') !== NULL){

					Storage::disk('public')->delete($nota->src);
					$nota->src = $request->file('src')->store('imgs/notas', 'public');
				}//end if
			}else{

        Storage::disk('public')->delete($nota->src);
				$nota->src= $request->file('src')->store('imgs/notas', 'public');
			}//end else
		}else{

			if($nota->media == 'imagen'){

				Storage::disk('public')->delete($nota->src);
			}
			$nota->src= substr(strrchr($request->src, '='), 1);
		}//end else

		$nota->fill($request->except(['src']));
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
    if($nota->media == 'imagen'){

      Storage::disk('public')->delete($nota->img);
    }//end if
		$nota->delete();
	}//end destroy
}//end NotasController

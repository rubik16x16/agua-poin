<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Usuario;

class LoginController extends Controller{


  public function login(Request $request){

    $usuario= Usuario::where('correo', $request->correo)->get()->first();

    if($usuario->clave == $request->clave){
      return response()->json($usuario->toArray());
    }//end if
    return response()->json('error');
  }//end login
}//end LoginController

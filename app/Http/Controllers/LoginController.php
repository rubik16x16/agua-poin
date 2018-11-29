<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Lcobucci\JWT\Builder;
use Illuminate\Support\Facades\Hash;
use Lcobucci\JWT\Signer\Hmac\Sha256;

use App\Models\Usuario;

class LoginController extends Controller{

	public function login(Request $request){

		$usuario= Usuario::where('correo', $request->correo)->get()->first();

		if($usuario == NULL){

			return response()->json(['erorr' => 'usuario inexistente']);
		}else{

			if (Hash::check($request->clave, $usuario->clave)) {

				$expirationTime= time() + (3600 * 8);

				return response()->json([
					'token' => $this->generarToken($usuario, $expirationTime)->__toString(),
					'expires_at' => $expirationTime
				]);
			}else{

				return response()->json(['error'=> 'clave invalida']);
			}//endelse
		}//endelse
	}//end login

	private function generarToken(Usuario $usuario, $expirationTime){

		$signer= new Sha256();

		$token = (new Builder())->setIssuer('http://localhost') // Configures the issuer (iss claim)
			->setAudience('http://localhost') // Configures the audience (aud claim)
			->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
			->setExpiration($expirationTime) // Configures the expiration time of the token (exp claim)
			->set('correo', $usuario->correo)
			->set('id', $usuario->id)
			->sign($signer, 'testing') // creates a signature using "testing" as key
			->getToken(); // Retrieves the generated tokens

		return $token;
	}
}//end LoginController

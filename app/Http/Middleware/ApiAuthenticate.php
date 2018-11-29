<?php

namespace App\Http\Middleware;

use Closure;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Signer\Hmac\Sha256;

class ApiAuthenticate{

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next){

    $data = new ValidationData();
    $signer = new Sha256();
    $data->setCurrentTime(time());

    $token = (new Parser())->parse($request->header('authorization')); // Parses from a string
    

    if($token->verify($signer, 'testing') && $token->validate($data)){

      return $next($request);
    }

		abort(401);
	}//end handle
}//end ApiAuthenticate

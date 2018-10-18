<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('notas', 'NotasController');
Route::post('notas/img/{id}', 'NotasController@storeImg');

Route::resource('productos', 'ProductosController');
Route::post('productos/img/{id}', 'ProductosController@storeImg');

Route::resource('pedidos', 'PedidosController');

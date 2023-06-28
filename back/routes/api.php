<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

 //Route::get('teste','\App\Http\Controllers\Api\ContatoController@status');
 //Route::post('contatos/add', '\App\Http\Controllers\Api\ContatoController@add');
Route::namespace('App\Http\Controllers\Api')->group(function(){
    Route::get('teste','ContatoController@status');
    Route::post('contatos/add', 'ContatoController@add');
    Route::get('getById/{id}','ContatoController@listById');
    Route::get('getAll','ContatoController@list');
});
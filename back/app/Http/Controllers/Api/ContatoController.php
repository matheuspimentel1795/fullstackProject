<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contato;


class ContatoController extends Controller
{
    public function  status(){
        return ['status'=> 'ok'];
    }

    public function add(Request $request){
        try{
            $contato = new Contato();
            $contato->nome = $request->nome;
            $contato->telefone = $request->telefone;
            $contato->email = $request->email;

            $contato->save();

            return $contato;
        }catch(\Exception $error){
            return $error;
        }
    }
      /**
     * @OA\Get(
     *     tags={"course"},
     *     summary="Returns a list of courses",
     *     description="Returns a object of courses",
     *     path="/V1/getAll",
     *     @OA\Response(response="200", description="success"),
     * ),
     * 
    */
    public function list(){
        $contato = Contato::all();
        return $contato;
    }
    public function listById($id){
        $contato = Contato::find($id);
        if(empty($contato)){
            return ['status'=> 'Não encontrado contato para o id informado'];
        }
        return $contato;
    }
}

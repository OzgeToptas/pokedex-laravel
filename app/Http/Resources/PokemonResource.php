<?php

namespace App\Http\Resources;

use App\Services\PokedexService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Http;

class PokemonResource extends JsonResource
{
    /**
     * Transform the resource resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $pokeDetail = (new PokedexService())->show($this['name']);
        if ($pokeDetail) {
            $species = (new PokedexService())->getSpecies($pokeDetail['species']['url'])->json();

            return [
                'id'        => $pokeDetail['id'],
                'name'      => $pokeDetail['name'],
                'types'     => PokemonTypesResources::collection($pokeDetail['types']),
                'image'     => $pokeDetail['sprites']['other']['dream_world']['front_default'],
                'species'   => (new PokemonInfoResources($species)),
                'height'    => $pokeDetail['height'],
                'weight'    => $pokeDetail['weight'],
                'abilities' => PokemonAbilityResources::collection($pokeDetail['abilities']),
            ];
        } else {
            return [];
        }
    }
}

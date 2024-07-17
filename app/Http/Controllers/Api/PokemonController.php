<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PokemonResponseCollection;
use App\Services\PokedexService;
use Illuminate\Support\Facades\Cache;

class PokemonController extends Controller
{
    public function getAllPokemon() {
        $pokedexList = (new PokedexService())->getAll();
        return Cache::remember('pokemon', 31556926, function () use ($pokedexList) {
            return new PokemonResponseCollection($pokedexList);
        });
    }
}

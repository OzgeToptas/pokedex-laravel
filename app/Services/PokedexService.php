<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;

class PokedexService {
    private $baseUrl;

    public function __construct() {
        $this->baseUrl = 'https://pokeapi.co/api/v2/';
    }

    public function getAll() {
        $url = $this->baseUrl . 'pokemon?limit=30';
        return Http::withOptions([
            'verify' => false,
            'allow_redirects' => true
        ])->get($url)->json()['results'];
    }

    public function show($pokedexName) {
        $url = $this->baseUrl . 'pokemon/' . $pokedexName;
        return Http::withOptions([
            'verify' => false,
            'allow_redirects' => true
        ])->get($url)->json();
    }

    public function getSpecies($url) {
        return Http::withOptions([
            'verify' => false,
            'allow_redirects' => true
        ])->get($url);
    }
}

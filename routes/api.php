<?php

use App\Http\Controllers\Api\PokemonController;
use Illuminate\Support\Facades\Route;

Route::get('pokedex', [PokemonController::class, 'getAllPokemon'])->name('pokedex');

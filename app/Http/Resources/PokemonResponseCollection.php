<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PokemonResponseCollection extends ResourceCollection
{
    public $collects = "App\Http\Resources\PokemonResource";
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "data"  => $this->collection,
            "meta"  => [
                "custom"      => "value"
            ]
        ];
    }
}

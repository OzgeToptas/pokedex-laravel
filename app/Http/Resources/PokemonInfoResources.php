<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PokemonInfoResources extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'text' => $this['flavor_text_entries'][0]['flavor_text'],
            'species' => $this['genera'][7]['genus'],
        ];
    }
}


import { route as ziggyRoute } from 'ziggy-js';

export interface PokeType {
	status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'error'
    errors: string | undefined
	pokeList: IPokemon[]
    pagination: PaginationType
}

interface PaginationType {
    currentPage: number,
    totalPages: number,
    pagesPerPage: number
}

export interface IPokemon {
    id: number
    name: string
    types: string[]
    image: string
    species: Species
    height: number
    weight: number
    abilities: Ability[]
  }

  interface Species {
    text: string
    species: string
  }

  interface Ability {
    name: string
    is_hidden: boolean
  }

  interface Meta {
    custom: string
  }

  declare global {
    var route: typeof ziggyRoute;
  }

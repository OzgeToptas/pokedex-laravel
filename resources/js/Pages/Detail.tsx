import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/Redux/hook';
import fetchPokemon from '@/Redux/thunk/pokeThunk';
import { PokemonTypeColors, pokeNum } from '@/Utils/utils';
import { Head, Link } from '@inertiajs/react';
import '../../scss/app.scss'

function Detail({pokemon}: {pokemon: string}) {
  const dispatch = useAppDispatch();
  const { pokeList } = useAppSelector((state) => state.poke)

  useEffect(() => {
    const fetchData = async () => {
        await dispatch(fetchPokemon());
    };
    if (!pokeList.length) fetchData();
  }, []);

  const poke  = pokeList.find(({ name }) => name === pokemon)
  if (!poke) return null;
  const { id, name, types, image, species, height, weight, abilities } = poke
  const backgroundColors = types.map(( type ) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([key, _]) => key === type
    );

    return backgroundColor;
  })

  return (
    <>
      <Head title={name} />
      <div className="detail-container w-10/12">
        <Link className='go-back' href={route('home') }>Go Back</Link>
        <div className='flex flex-row mt-1'>
          <div className='img basis-1/4' style={{  backgroundColor: backgroundColors[0].medium }}>
              <div className='d-flex'>
                <span className="poke-no"># {pokeNum(id, 3)}</span>
                <span className="poke-name">{name}</span>
              </div>
              <img src={image} alt="" />
          </div>
          <div className='pokemon-detail basis-1/2'>
            <h1>Pokémon Data</h1>
            <p>
              {
                species.text
              }
            </p>
            <ul>
              <li>
                <span>Species</span>
                <span>{species.species}</span>
              </li>
              <li>
                <span>Height</span>
                <span>{height / 10} M</span>
              </li>
              <li>
                <span>Weight</span>
                <span>{`${(weight / 10).toFixed(1)} kg`}</span>
              </li>
              <li>
                <span>Abilities</span>
                <ul>
                  {abilities.map((ability, index) => (
                    <li>
                      {index + 1}. {ability.name}{" "}
                      {ability.is_hidden && "(Hidden Ability)"}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
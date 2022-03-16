import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokeCard/PokeCard';
import { fetchPokedex } from '../services/pokemon';
import PokeCard from '../components/PokeCard/PokeCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokedex();
      console.log(pokemonList);
      setPokemon(pokemonList);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((individual) => (
        <PokeCard key={individual.id} {...individual}/>
      ))}
    </div>
  );
}

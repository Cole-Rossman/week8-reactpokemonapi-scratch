import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokeCard/PokeCard';
import { fetchPokedex, fetchTypes } from '../services/pokemon';
import PokeCard from '../components/PokeCard/PokeCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokedex();
      setPokemon(pokemonList);
      const typesData = await fetchTypes();
      setTypes(typesData);
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

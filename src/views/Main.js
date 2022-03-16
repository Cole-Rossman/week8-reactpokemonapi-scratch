import React, { useState, useEffect } from 'react';
import { fetchPokedex } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokedex();
      setPokemon(pokemonList);
    };
    fetchData();
  }, []);

  return (
    <div>Hello</div>
  );
}

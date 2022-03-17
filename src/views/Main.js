import React, { useState, useEffect } from 'react';
import { fetchPokedex, fetchTypes, fetchFilteredPokemon } from '../services/pokemon';
import PokeCard from '../components/PokeCard/PokeCard';
import TypeDropdown from '../components/controls/TypeDropdown';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokedex();
      setPokemon(pokemonList);
      const typesData = await fetchTypes();
      setTypes(typesData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedType === 'All') {
        const allList = await fetchPokedex();
        setPokemon(allList);
      } else {

        const data = await fetchFilteredPokemon(selectedType);
        setPokemon(data);
      }};
    fetchData();
  }, [selectedType]);

  if (loading) return <span className='loading'>Loading...</span>;

  return (
    <div>
      <TypeDropdown types={types} selectedType={selectedType} setSelectedType={setSelectedType} /> 
      {pokemon.map((individual) => (
        <PokeCard key={individual.id} {...individual}/>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { fetchPokedex, fetchTypes, fetchFilteredPokemon } from '../services/pokemon';
import PokeCard from '../components/PokeCard/PokeCard';
import TypeDropdown from '../components/controls/TypeDropdown';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      if (selectedType === 'All') {
        const allList = await fetchPokedex();
        setPokemon(allList);
      }
      const typesData = await fetchTypes();
      setTypes(typesData);
      const data = await fetchFilteredPokemon(selectedType);
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, [selectedType]);


  const searchPokemon = async () => {
    const searchData = await fetchFilteredPokemon(selectedType, search);
    setPokemon(searchData);
    setSearch('');
  };

  if (loading) return <span className='loading'>Loading...</span>;

  return (
    <div>
      <TypeDropdown types={types} selectedType={selectedType} setSelectedType={setSelectedType} /> 
      <SearchBar query={search} setQuery={setSearch} callback={searchPokemon} />
      {pokemon.map((individual) => (
        <PokeCard key={individual.id} {...individual}/>
      ))}
    </div>
  );
}

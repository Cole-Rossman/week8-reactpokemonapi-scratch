import React, { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokedex, fetchTypes, fetchFilteredPokemon } from '../services/pokemon';
import PokeCard from '../components/PokeCard/PokeCard';
import TypeDropdown from '../components/controls/TypeDropdown/TypeDropdown';
import SearchBar from '../components/controls/SearchBar/SearchBar';
import Sort from '../components/controls/Sort/Sort';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState([]);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('');

 
  useEffect(() => {
    const fetchData = async () => {
      if (selectedType === 'All') {
        const allList = await fetchPokedex();
        setPokemon(allList);
      }
      const typesData = await fetchTypes();
      setTypes(typesData);
      const data = await fetchFilteredPokemon(selectedType, null, option);
      setPokemon(data);
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => {
        clearTimeout(loadingTimeout);
      };
    };
    fetchData();
  }, [selectedType, option]);



  const searchPokemon = async () => {
    const searchData = await fetchFilteredPokemon(selectedType, search, option);
    setPokemon(searchData);
    setSearch('');
  };

  if (loading) return <span className='loader'></span>;

  return (
    <div className='main'>
      <TypeDropdown types={types} selectedType={selectedType} setSelectedType={setSelectedType} /> 
      <Sort option={option} callback={setOption} />
      <SearchBar query={search} setQuery={setSearch} callback={searchPokemon} />
      <div className='pokemon-list'>
        {pokemon.map((individual) => (
          <PokeCard key={individual.id} {...individual}/>
        ))}
      </div>
    </div>
      
  );
}

export async function fetchPokedex() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}

export async function fetchFilteredPokemon(selectedType, search, option) {
  const params = new URLSearchParams();
  if (selectedType !== 'All') {
    params.set('type', selectedType);}
  if (search) {
    params.set('pokemon', search);
  }
  if (option === 'A-Z') {
    params.set('direction', 'asc');
  } 
  if (option === 'Z-A') { params.set('direction', 'desc');}
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}`);
  const data = await resp.json();
  return data.results;
}

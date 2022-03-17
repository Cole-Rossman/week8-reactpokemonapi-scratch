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

export async function fetchFilteredPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await resp.json();
  return data.results;
}
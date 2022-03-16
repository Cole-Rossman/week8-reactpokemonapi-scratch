export async function fetchPokedex() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = resp.json();
  return data.results;
}

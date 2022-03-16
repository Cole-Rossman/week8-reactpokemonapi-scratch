import React from 'react';

export default function PokemonCard({ url_image, hp, pokemon, ability_1, egg_group_1, id, type_1, type_2 }) {
  return (
    <div key={ id } className='PokemonCard'>
      <img alt='name' width="72" height="54" src={url_image} />
      <h3>{pokemon}</h3>
      <p>
        hp: {hp} - Ability: {ability_1} - Egg group: {egg_group_1}
      </p>
      <p>
        (type: {type_1}, {type_2})
      </p>
    </div>
  );
}
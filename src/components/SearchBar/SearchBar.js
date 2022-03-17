import React from 'react';

export default function SearchBar({ query, setQuery, callback }) {
  return (
    <div className='search'>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={callback}>Search Pokemon</button>
    </div>
  );
}
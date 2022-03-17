import React from 'react';

export default function TypeDropdown({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      <option key='All' value='All'>All</option>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
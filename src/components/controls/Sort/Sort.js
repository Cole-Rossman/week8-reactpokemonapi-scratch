import React from 'react';

export default function Sort({ options, callback }) {
  return (
    <select className='sort' onChange={(e) => callback(e.target.value)}>
      <option key={options} value={options}>A-Z</option>
      <option key={options} value={options}>Z-A</option>
            
    </select>
  );
}
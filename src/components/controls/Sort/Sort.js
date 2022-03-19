import React from 'react';

export default function Sort({ option, callback }) {
  return (
    <select className='sort' value={option} onChange={(e) => callback(e.target.value)}>
      <option key=''>Sort</option>
      <option key='A-Z' value='A-Z'>A-Z</option>
      <option key='Z-A' value='Z-A'>Z-A</option>
            
    </select>
  );
}
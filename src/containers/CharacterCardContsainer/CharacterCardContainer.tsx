import React from 'react';
import { characters } from '../../constants';
import { CharacterCard } from '../../components';

export default function CharacterCardContainer() {
  return (
    <div className='space-x-1 hidden sm:flex'>
      {characters.map((el, idx) => (
        <CharacterCard key={idx} name={el} />
      ))}
    </div>
  );
}

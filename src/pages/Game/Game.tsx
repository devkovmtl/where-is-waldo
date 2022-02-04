import React from 'react';
import { useParams } from 'react-router-dom';

export default function Game() {
  const params = useParams();
  const levelId = params.levelId;
  return (
    <div className='mt-20 container mx-auto p-5 min-w-[640px]'>
      <img
        className='w-full hover:cursor-crosshair'
        src={require(`../../images/levels/Level ${levelId}.jpg`)}
        alt="where's waldo"
      />
    </div>
  );
}

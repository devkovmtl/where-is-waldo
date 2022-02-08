import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelCard } from '../../components';
import { levels, LEVELSIMAGEPATH } from '../../constants';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='container h-full min-h-screen mt-20 py-9 px-10 mx-auto flex flex-col items-center justify-center gap-4 sm:grid md:grid-cols-2 md:items-start lg:grid-cols-3'>
      {levels.map((el, idx) => {
        const { index } = el;
        // @ts-ignore
        const imageSrc = LEVELSIMAGEPATH[`Level${index}`];
        return (
          <LevelCard
            key={idx}
            level={index}
            imageSrc={imageSrc}
            onClickNavigate={() => navigate(`game/${index}`)}
          />
        );
      })}
    </div>
  );
}

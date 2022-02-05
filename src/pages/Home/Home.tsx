import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelCard } from '../../components';
const levels = ['Level 1', 'Level 2', 'Level 3'];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='container h-full min-h-screen mt-20 py-9 px-10 mx-auto flex flex-col items-center justify-center gap-4 sm:grid md:grid-cols-2 md:items-start lg:grid-cols-3'>
      {levels.map((el, idx) => {
        const levelId = el.split(' ')[1];
        return (
          <LevelCard
            key={idx}
            level={el}
            backgroundImg={require(`../../images/levels/${el}.jpg`)}
            onClickNavigate={() => navigate(`game/${levelId}`)}
          />
        );
      })}
    </div>
  );
}

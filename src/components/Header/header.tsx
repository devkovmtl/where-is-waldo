import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharacterCardContainer } from '../../containers';
const HomePageContentHeader = (
  <div className='h-full flex justify-center items-center'>
    <h1 className='text-red-500 font-bold text-2xl lg:text-4xl'>
      Find Waldo !
    </h1>
  </div>
);

const GamePageContentHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='h-full flex justify-between items-center px-10'>
      <button
        onClick={() => navigate('/')}
        className='bg-blue-400 rounded-md py-4 px-9 text-white font-bold hover:cursor-pointer hover:bg-blue-300 transition-all'
      >
        HOME
      </button>
      <CharacterCardContainer />
    </div>
  );
};

export default function Header() {
  const location = useLocation();
  return (
    <header className='bg-white flex-none h-20 fixed w-full top-0 left-0 shadow z-50'>
      {location.pathname === '/' ? (
        HomePageContentHeader
      ) : (
        <GamePageContentHeader />
      )}
    </header>
  );
}

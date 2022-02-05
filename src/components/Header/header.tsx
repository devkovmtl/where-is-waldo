import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharacterCard } from '..';
import { characters } from '../../constants';
import { HeaderProps } from '../../types';
import { time } from '../../utils';

const HomePageContentHeader = (
  <div className='h-full flex justify-center items-center'>
    <h1 className='text-red-500 font-bold text-2xl lg:text-4xl'>
      Find Waldo !
    </h1>
  </div>
);

const GamePageContentHeader = ({ charactersFound, seconds }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className='h-full flex justify-between items-center px-10'>
      <button
        onClick={() => navigate('/')}
        className='bg-blue-400 rounded-md py-4 px-9 text-white font-bold hover:cursor-pointer hover:bg-blue-300 transition-all'
      >
        HOME
      </button>
      <p>
        {time(seconds)[0]}:{time(seconds)[1]}
      </p>
      <div className='space-x-1 hidden sm:flex'>
        {characters.map((el, idx) => {
          const isFound = charactersFound[el];
          return isFound ? (
            <div className='opacity-30' key={idx}>
              <CharacterCard name={el} />
            </div>
          ) : (
            <CharacterCard key={idx} name={el} />
          );
        })}
      </div>
    </div>
  );
};

export default function Header({ charactersFound, seconds }: HeaderProps) {
  const location = useLocation();
  console.log(charactersFound);
  return (
    <header className='bg-white flex-none h-20 fixed w-full top-0 left-0 shadow z-50'>
      {location.pathname === '/' ? (
        HomePageContentHeader
      ) : (
        <GamePageContentHeader
          charactersFound={charactersFound}
          seconds={seconds}
        />
      )}
    </header>
  );
}

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharacterCard } from '..';
import { characters, CHARACTERSIMAGEPATH } from '../../constants';
import { HeaderProps } from '../../types';
import { time } from '../../utils';

const HomePageContentHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='h-full flex justify-center items-center'>
      <h1 className='flex-1 text-red-500 text-center font-bold text-2xl lg:text-4xl'>
        Find Waldo !
      </h1>
      {location.pathname === '/' ? (
        <div
          className='bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 mr-4 rounded'
          onClick={() => navigate('highscore')}
        >
          Leaderboard
        </div>
      ) : null}
    </div>
  );
};

const GamePageContentHeader = ({
  charactersFound,
  seconds,
  isGameOver,
  finalScore,
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className='h-full flex justify-between items-center px-10'>
      <button
        onClick={() => navigate('/')}
        className='bg-blue-400 rounded-md py-4 px-9 text-white font-bold hover:cursor-pointer hover:bg-blue-300 transition-all'
      >
        HOME
      </button>
      {isGameOver ? (
        <p>
          {time(finalScore)[0] < 10
            ? `0${time(finalScore)[0]}`
            : time(finalScore)[0]}
          :
          {time(finalScore)[1] < 10
            ? `0${time(finalScore)[1]}`
            : time(finalScore)[1]}
        </p>
      ) : (
        <>
          <p>
            {time(seconds)[0] < 10 ? `0${time(seconds)[0]}` : time(seconds)[0]}:
            {time(seconds)[1] < 10 ? `0${time(seconds)[1]}` : time(seconds)[1]}
          </p>
          <div className='space-x-1 hidden sm:flex'>
            {characters.map((el, idx) => {
              const { name } = el;
              // @ts-ignore
              const imageSrc = CHARACTERSIMAGEPATH[name];
              // @ts-ignore
              const isFound = charactersFound[name];
              return isFound ? (
                <div className='opacity-30' key={idx}>
                  <CharacterCard name={name} imageSrc={imageSrc} />
                </div>
              ) : (
                <CharacterCard key={idx} name={name} imageSrc={imageSrc} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default function Header({
  charactersFound,
  seconds,
  isGameOver,
  finalScore,
}: HeaderProps) {
  const location = useLocation();

  return (
    <header className='bg-white flex-none h-20 fixed w-full top-0 left-0 shadow z-50'>
      {location.pathname === '/' || location.pathname === '/highscore' ? (
        <HomePageContentHeader />
      ) : (
        <GamePageContentHeader
          charactersFound={charactersFound}
          seconds={seconds}
          isGameOver={isGameOver}
          finalScore={finalScore}
        />
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { characterFound } from './types';
import { Footer, Header } from './components';
import { Home, Game } from './pages';

function App() {
  const [charactersFound, setCharactersFound] = useState<characterFound>({
    Waldo: false,
    Wenda: false,
    Wizard: false,
    Odlaw: false,
  });

  const [seconds, setSeconds] = useState<number>(0);
  const [isGameOver, setGameOver] = useState<boolean>(false);

  return (
    <div>
      <Header charactersFound={charactersFound} seconds={seconds} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='game/:levelId'
          element={
            <Game
              charactersFound={charactersFound}
              setCharactersFound={setCharactersFound}
              seconds={seconds}
              setSeconds={setSeconds}
              isGameOver={isGameOver}
              setGameOver={setGameOver}
            />
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

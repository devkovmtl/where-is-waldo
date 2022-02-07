import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseServices from './services/firebase.services';
import { characterFound, UserScore } from './types';
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
  const [finalScore, setFinalScore] = useState<number>(0);
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [solution, setSolution] = useState({});
  const [usersScores, setUsersScore] = useState<UserScore[]>([]);

  const location = useLocation();

  useEffect(() => {
    getAllSolutions();
    getAllUsersByScore();
  }, []);

  // reset the game when user change the page
  useEffect(() => {
    setCharactersFound((prevState) => ({
      ...prevState,
      Waldo: false,
      Wenda: false,
      Wizard: false,
      Odlaw: false,
    }));
    setSeconds(0);
    setGameOver(false);
  }, [location]);

  const getAllSolutions = async () => {
    const { docs } = await firebaseServices.getSolutions();
    const solution = {};
    for (let i = 0; i < docs.length; i++) {
      // @ts-ignore
      solution[`level${i + 1}`] = { ...docs[i].data() };
    }

    setSolution((prevState) => ({ ...prevState, ...solution }));
  };

  const getAllUsersByScore = async () => {
    const { docs } = await firebaseServices.getAllUsersByScore();
    let users: UserScore[] = [];
    users = docs.map((el) => ({
      id: el.id,
      username: el.data().username,
      score: el.data().score,
    }));
    setUsersScore((prevstate) => [...prevstate, ...users]);
  };
  console.log(usersScores);
  return (
    <div>
      <Header
        charactersFound={charactersFound}
        seconds={seconds}
        isGameOver={isGameOver}
        finalScore={finalScore}
      />
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
              finalScore={finalScore}
              setFinalScore={setFinalScore}
              solution={solution}
            />
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

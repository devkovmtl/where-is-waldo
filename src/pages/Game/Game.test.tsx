import { render, screen } from '@testing-library/react';
import Game from './Game';

describe.skip('<Game />', () => {
  test.skip('should render the Game Page', () => {
    const charactersFound = {
      Waldo: false,
      Wenda: false,
      Wizard: false,
      Odlaw: false,
    };
    const setCharactersFound = jest.fn;
    const seconds = 1;
    const isGameOver = false;
    const setGameOver = jest.fn;
    const setSeconds = jest.fn;
    const finalScore = 1;
    const setFinalScore = jest.fn;

    render(
      <Game
        charactersFound={charactersFound}
        setCharactersFound={setCharactersFound}
        seconds={seconds}
        setSeconds={setSeconds}
        isGameOver={isGameOver}
        setGameOver={setGameOver}
        finalScore={finalScore}
        setFinalScore={setFinalScore}
      />
    );

    const gamePage = screen.queryByText('');
  });
});

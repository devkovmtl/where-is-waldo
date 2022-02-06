import { SetStateAction } from 'react';

export type charactersName = 'Waldo' | 'Wizard' | 'Wenda' | 'Odlaw';

export type characterFound = {
  Waldo: boolean;
  Wizard: boolean;
  Wenda: boolean;
  Odlaw: boolean;
};

export type HeaderProps = {
  charactersFound: characterFound;
  seconds: number;
  isGameOver: boolean;
  finalScore: number;
};

export type Position = {
  top: number;
  left: number;
};

export type GameProps = {
  charactersFound: {
    Waldo: boolean;
    Wenda: boolean;
    Wizard: boolean;
    Odlaw: boolean;
  };
  setCharactersFound: React.Dispatch<
    SetStateAction<{
      Waldo: boolean;
      Wenda: boolean;
      Wizard: boolean;
      Odlaw: boolean;
    }>
  >;
  seconds: number;
  setSeconds: React.Dispatch<number>;
  isGameOver: boolean;
  setGameOver: React.Dispatch<boolean>;
  finalScore: number;
  setFinalScore: React.Dispatch<number>;
};

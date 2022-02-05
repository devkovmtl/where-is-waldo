import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { charactersName, GameProps, Position } from '../../types';
import { characters, levelsPosition } from '../../constants';
import { checkPoint } from '../../utils';

export default function Game({
  charactersFound,
  setCharactersFound,
  seconds,
  setSeconds,
  isGameOver,
  setGameOver,
}: GameProps) {
  const navigate = useNavigate();
  const [showTarget, setShowTarget] = useState<boolean>(false);
  const [targetPosition, setTargetPosition] = useState<Position>({
    top: -1000,
    left: -1000,
  });

  // Grab the params from url to get the level
  const params = useParams();
  const levelId = params.levelId;

  // set interval to know player resolve time
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  // check if get is over
  useEffect(() => {
    if (
      charactersFound.Waldo &&
      charactersFound.Wenda &&
      charactersFound.Wizard &&
      charactersFound.Odlaw
    ) {
      alert('Congratulations, you found everyone!');
      setGameOver(true);
    }
  }, [charactersFound]);

  useEffect(() => {
    // reset the game
    resetGame();
  }, [isGameOver]);

  const handleImgClick = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    const mouseleft = e.clientX - rect.left;
    const mouseTop = e.clientY - rect.top;
    setTargetPosition({ top: mouseTop, left: mouseleft });
    setShowTarget(true);
  };

  const checkIfFound = (name: charactersName): void => {
    const levelNum = `level${levelId}` as 'level1' | 'level2' | 'level3';
    const { top, left } = levelsPosition[`${levelNum}`][`${name}`];
    const found = checkPoint(
      targetPosition.left,
      targetPosition.top,
      left,
      top,
      20
    );
    if (found) {
      switch (name) {
        case 'Waldo':
          setCharactersFound((prevState) => ({ ...prevState, Waldo: true }));
          break;
        case 'Wenda':
          setCharactersFound((prevState) => ({ ...prevState, Wenda: true }));
          break;
        case 'Wizard':
          setCharactersFound((prevState) => ({ ...prevState, Wizard: true }));
          break;
        case 'Odlaw':
          setCharactersFound((prevState) => ({ ...prevState, Odlaw: true }));
          break;
        default:
          break;
      }
    }
    setShowTarget(false);
  };

  const resetGame = () => {
    setCharactersFound((prevState) => ({
      ...prevState,
      Waldo: false,
      Wenda: false,
      Wizard: false,
      Odlaw: false,
    }));
    setSeconds(0);
    setGameOver(false);
    navigate('/');
  };

  return (
    <div className='mt-20  mx-auto p-5 w-[980px] relative'>
      {isGameOver ? null : (
        <div
          className={`${
            showTarget
              ? 'absolute border-2  border-purple-600 rounded-md bg-white px-2 py-1 space-y-1'
              : 'hidden'
          }`}
          style={{
            top: `${targetPosition.top}px`,
            left: `${targetPosition.left + 45}px`,
          }}
        >
          {characters.map((el: charactersName, idx) => {
            const isFound = charactersFound[el];
            return isFound ? null : (
              <div
                key={idx}
                className='px-4 rounded-md  hover:bg-slate-400 hover:cursor-pointer'
                onClick={() => checkIfFound(el)}
              >
                <p>{el}</p>
              </div>
            );
          })}
        </div>
      )}
      <img
        className='w-full hover:cursor-crosshair'
        src={require(`../../images/levels/Level ${levelId}.jpg`)}
        alt="where's waldo"
        onClick={handleImgClick}
      />
    </div>
  );
}

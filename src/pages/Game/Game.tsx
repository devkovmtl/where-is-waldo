import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { charactersName, GameProps, Position } from '../../types';
import { characters } from '../../constants';
import { checkPoint } from '../../utils';
import { Modal } from '../../components';

export default function Game({
  charactersFound,
  setCharactersFound,
  seconds,
  setSeconds,
  isGameOver,
  setGameOver,
  finalScore,
  setFinalScore,
  solution,
}: GameProps) {
  const [showTarget, setShowTarget] = useState<boolean>(false);
  const [targetPosition, setTargetPosition] = useState<Position>({
    top: -1000,
    left: -1000,
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  // Grab the params from url to get the level
  const params = useParams();
  const levelId = params.levelId;

  // toast message
  const notify = (message: string) => {
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
    });
  };

  // set interval to know player resolve time
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (
      charactersFound.Waldo &&
      charactersFound.Wenda &&
      charactersFound.Wizard &&
      charactersFound.Odlaw
    ) {
      setShowModal(true);
      setFinalScore(seconds);
      setGameOver(true);
    }

    if (isGameOver) {
      setFinalScore(seconds);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds, charactersFound, isGameOver]);

  const handleImgClick = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    const mouseleft = e.clientX - rect.left;
    const mouseTop = e.clientY - rect.top;
    setTargetPosition({ top: mouseTop, left: mouseleft });
    setShowTarget(true);
  };

  const checkIfFound = (name: charactersName): void => {
    const levelNum = `level${levelId}` as 'level1' | 'level2' | 'level3';
    const { top, left } = solution[`${levelNum}`][`${name}`];
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
          notify(`You found Waldo!`);
          break;
        case 'Wenda':
          setCharactersFound((prevState) => ({ ...prevState, Wenda: true }));
          notify(`You found Wenda!`);
          break;
        case 'Wizard':
          setCharactersFound((prevState) => ({ ...prevState, Wizard: true }));
          notify(`You found Wizard!`);
          break;
        case 'Odlaw':
          setCharactersFound((prevState) => ({ ...prevState, Odlaw: true }));
          notify(`You found Odlaw!`);
          break;
        default:
          break;
      }
    }
    setShowTarget(false);
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
        src={require(`../../assets/images/levels/Level${levelId}.jpg`)}
        alt="where's waldo"
        onClick={handleImgClick}
      />
      {showModal ? (
        <Modal setShowModal={setShowModal} finalScore={finalScore} />
      ) : null}
    </div>
  );
}

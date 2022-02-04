import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characters, charactersName, levelsPosition } from '../../constants';
import { checkPoint } from '../../utils';

type Position = {
  top: number;
  left: number;
};

export default function Game() {
  const [mousePosition, setMousePosition] = useState<Position>({
    top: 0,
    left: 0,
  });
  const [showTarget, setShowTarget] = useState<boolean>(false);
  const [targetPosition, setTargetPosition] = useState<Position>({
    top: -1000,
    left: -1000,
  });
  const [isWaldoFound, setIsWaldoFound] = useState(false);
  const [isWendaFound, setIsWendaFound] = useState(false);
  const [isWizardFound, setIsWizardFound] = useState(false);
  const [isOdlawFound, setIsOdlawFound] = useState(false);

  const params = useParams();
  const levelId = params.levelId;

  useEffect(() => {
    if (isWaldoFound && isWendaFound && isWizardFound && isOdlawFound) {
      alert('Congratulations, you found everyone!');
    }
  }, [isWaldoFound, isWendaFound, isWizardFound, isOdlawFound]);

  const handleImgClick = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    const mouseleft = e.clientX - rect.left;
    const mouseTop = e.clientY - rect.top;

    setMousePosition({ top: mouseTop, left: mouseleft });
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
      alert(`You found ${name}`);
      switch (name) {
        case 'Waldo':
          setIsWaldoFound(true);
          break;
        case 'Wenda':
          setIsWendaFound(true);
          break;
        case 'Wizard':
          setIsWizardFound(true);
          break;
        case 'Odlaw':
          setIsOdlawFound(true);
          break;
        default:
          break;
      }
    }
    setShowTarget(false);
  };
  return (
    <div className='mt-20  mx-auto p-5 w-[980px] relative'>
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
        {characters.map((el: charactersName, idx) => (
          <div
            key={idx}
            className='px-4 rounded-md  hover:bg-slate-400 hover:cursor-pointer'
            onClick={() => checkIfFound(el)}
          >
            <p>{el}</p>
          </div>
        ))}
      </div>
      <img
        className='w-full hover:cursor-crosshair'
        src={require(`../../images/levels/Level ${levelId}.jpg`)}
        alt="where's waldo"
        onClick={handleImgClick}
      />
    </div>
  );
}

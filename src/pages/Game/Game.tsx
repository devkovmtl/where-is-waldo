import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { characters } from '../../constants';

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

  const params = useParams();
  const levelId = params.levelId;

  const handleImgClick = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log('LEFT: ', x, ' TOP: ', y);

    setMousePosition({ top: y, left: x });
    setTargetPosition({ top: y, left: x });
    setShowTarget(true);
  };
  console.log(
    'MOUSE LEFT: ',
    mousePosition.left,
    ' MOUSE TOP: ',
    mousePosition.top
  );
  return (
    <div className='mt-20 container mx-auto p-5 w-[980px] relative'>
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
        {characters.map((el, idx) => (
          <div
            key={idx}
            className='px-4 rounded-md  hover:bg-slate-400 hover:cursor-pointer'
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

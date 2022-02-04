import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

type MousePosition = {
  top: number;
  left: number;
};

export default function Game() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    top: 0,
    left: 0,
  });
  const params = useParams();
  const levelId = params.levelId;

  const handleImgClick = (e: React.MouseEvent) => {
    const rect = (e.target as Element).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ top: y, left: x });
  };

  return (
    <div className='mt-20 container mx-auto p-5 w-[640px]'>
      <img
        className='w-full hover:cursor-crosshair'
        src={require(`../../images/levels/Level ${levelId}.jpg`)}
        alt="where's waldo"
        onClick={handleImgClick}
      />
    </div>
  );
}

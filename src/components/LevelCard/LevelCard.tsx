import React from 'react';

type LevelCardProps = {
  level: number;
  imageSrc: string;
  onClickNavigate: () => void;
};

export default function LevelCard({
  level,
  imageSrc,
  onClickNavigate,
}: LevelCardProps) {
  return (
    <div
      onClick={onClickNavigate}
      className='bg-white max-w-sm rounded-md ring-1 ring-gray-900/5 hover:cursor-pointer hover:shadow-lg'
    >
      <img className='w-full' src={imageSrc} alt="Where's Waldo" />
      <div className='text-center py-4 px-5'>
        <p>Level {level}</p>
      </div>
    </div>
  );
}

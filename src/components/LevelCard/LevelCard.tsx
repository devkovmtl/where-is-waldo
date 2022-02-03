import React from 'react';

type LevelCardProps = {
  level: string;
  backgroundImg: string;
};

export default function LevelCard({ level, backgroundImg }: LevelCardProps) {
  return (
    <div className='bg-white max-w-sm rounded-md ring-1 ring-gray-900/5 hover:cursor-pointer hover:shadow-lg'>
      <img className='w-full' src={backgroundImg} alt="Where's Waldo" />
      <div className='text-center py-4 px-5'>
        <p>{level}</p>
      </div>
    </div>
  );
}

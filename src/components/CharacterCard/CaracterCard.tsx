import React from 'react';
import { characters } from '../../constants';
type CaracterCardProps = {
  name: string;
  imageSrc: string;
};

export default function CaracterCard({ name, imageSrc }: CaracterCardProps) {
  return (
    <div className='flex flex-col items-center justify-between p-1 bg-white ring-1 rounded-md ring-slate-200'>
      <img className='h-6 w-6 rounded-full' src={`${imageSrc}`} alt={name} />
      <p className='text-slate-500 text-sm font-extralight'>{name}</p>
    </div>
  );
}

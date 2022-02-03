import React from 'react';

export default function Header() {
  return (
    <header className='bg-white flex-none h-20 fixed w-full top-0 left-0 shadow'>
      <div className='h-full flex justify-center items-center'>
        <h1 className='text-red-500 font-bold text-2xl lg:text-4xl'>
          Find Waldo !
        </h1>
      </div>
    </header>
  );
}

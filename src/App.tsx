import React from 'react';
import { Header, LevelCard } from './components';

const levels = ['Level 1', 'Level 2', 'Level 3'];

function App() {
  return (
    <div>
      <Header />
      <div className='container h-full min-h-screen mt-20 py-9 px-10 mx-auto flex flex-col items-center justify-center gap-4 sm:grid md:grid-cols-2 md:items-start lg:grid-cols-3'>
        {levels.map((el, idx) => (
          <LevelCard
            key={idx}
            level={el}
            backgroundImg={require(`./images/levels/${el}.jpg`)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

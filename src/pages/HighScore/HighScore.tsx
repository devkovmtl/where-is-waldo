import React, { useEffect, useState } from 'react';
import { UserScore } from '../../types';
import firebaseServices from '../../services/firebase.services';
import { useNavigate } from 'react-router-dom';

type RowScoreProps = {
  username: string;
  score: number;
};

const RowScore = ({ username, score }: RowScoreProps) => {
  return (
    <div className='flex py-4 px-7 rounded-md border-2 mb-2'>
      <h1 className='flex-1'>{username}</h1> <span>{score}</span>
    </div>
  );
};

export default function HighScore() {
  const [level, setLevel] = useState(1);
  const [usersScoreByLevel, setUsersScoreByLevel] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsersByScore();
  }, []);

  const getAllUsersByScore = async () => {
    const { docs } = await firebaseServices.getAllUsersByScore();

    const level1 = docs
      .filter((el) => {
        const { level } = el.data();
        return level === 1;
      })
      .map((el) => {
        const id = el.id;
        const { username, score, level } = el.data();

        return { id, username, score, level } as UserScore;
      });

    const level2 = docs
      .filter((el) => {
        const { level } = el.data();
        return level === 2;
      })
      .map((el) => {
        const id = el.id;
        const { username, score, level } = el.data();

        return { id, username, score, level } as UserScore;
      });

    const level3 = docs
      .filter((el) => {
        const { level } = el.data();
        return level === 3;
      })
      .map((el) => {
        const id = el.id;
        const { username, score, level } = el.data();

        return { id, username, score, level } as UserScore;
      });

    setUsersScoreByLevel({
      level1: [...level1],
      level2: [...level2],
      level3: [...level3],
    });
  };

  let content;

  switch (level) {
    case 1:
      content = (
        <div>
          {!usersScoreByLevel ? (
            <div>Nothing to Show</div>
          ) : usersScoreByLevel.level1 &&
            usersScoreByLevel.level1.length > 0 ? (
            <div>
              {usersScoreByLevel.level1.map((el: UserScore) => (
                <RowScore key={el.id} username={el.username} score={el.score} />
              ))}
            </div>
          ) : null}
        </div>
      );
      break;

    case 2:
      content = (
        <div>
          {!usersScoreByLevel ? (
            <div>Nothing to Show</div>
          ) : usersScoreByLevel.level2 &&
            usersScoreByLevel.level2.length > 0 ? (
            <div>
              {usersScoreByLevel.level2.map((el: UserScore) => (
                <RowScore key={el.id} username={el.username} score={el.score} />
              ))}
            </div>
          ) : null}
        </div>
      );
      break;

    case 3:
      content = (
        <div>
          {!usersScoreByLevel ? (
            <div>Nothing to Show</div>
          ) : usersScoreByLevel.level3 &&
            usersScoreByLevel.level3.length > 0 ? (
            <div>
              {usersScoreByLevel.level3.map((el: UserScore) => (
                <RowScore key={el.id} username={el.username} score={el.score} />
              ))}
            </div>
          ) : null}
        </div>
      );
      break;

    default:
      content = (
        <div>
          {!usersScoreByLevel ? (
            <div>Nothing to Show</div>
          ) : usersScoreByLevel.level1 &&
            usersScoreByLevel.level1.length > 0 ? (
            <div>
              {usersScoreByLevel.level1.map((el: UserScore) => (
                <RowScore key={el.id} username={el.username} score={el.score} />
              ))}
            </div>
          ) : null}
        </div>
      );
      break;
  }

  return (
    <div className='mt-20  mx-auto p-5 h-screen'>
      <div className='flex space-x-5'>
        <div
          onClick={() => navigate('/')}
          className='py-2 px-3 bg-gray-500 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 transition-all'
        >
          Home
        </div>
        <div
          onClick={() => setLevel(1)}
          className='py-2 px-3 bg-blue-500 text-white rounded-md hover:cursor-pointer hover:bg-blue-700 transition-all'
        >
          Level 1
        </div>
        <div
          onClick={() => setLevel(2)}
          className='py-2 px-3 bg-blue-500 text-white rounded-md hover:cursor-pointer hover:bg-blue-700 transition-all'
        >
          Level 2
        </div>
        <div
          onClick={() => setLevel(3)}
          className='py-2 px-3 bg-blue-500 text-white rounded-md hover:cursor-pointer hover:bg-blue-700 transition-all'
        >
          Level 3
        </div>
      </div>

      <div className=' px-4 py-2 mt-3'>{content}</div>
    </div>
  );
}

import React, { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  setShowModal: React.Dispatch<boolean>;
  finalScore: number;
};

const Modal = ({ setShowModal, finalScore }: ModalProps) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    setShowModal(false);
    navigate('/');
  };
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-screen h-screen z-50 flex items-center justify-center'>
      <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
        <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 '>
          <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
            <h3
              className='text-lg leading-6 font-medium text-gray-900'
              id='modal-title'
            >
              You finished in {finalScore} seconds
            </h3>

            <p className='text-sm text-gray-500 my-3'>
              Enter your name to save your score.
            </p>
            <form className='bg-white pt-6 pb-8 w-full' onSubmit={handleSubmit}>
              <div className='mb-4 w-full pr-4'>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className='flex items-center '>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

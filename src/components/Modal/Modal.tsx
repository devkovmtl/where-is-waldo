import React from 'react';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
  setShowModal: React.Dispatch<boolean>;
  finalScore: number;
};

const Modal = ({ setShowModal, finalScore }: ModalProps) => {
  return (
    <div className='fixed top-0 left-0 bg-slate-900 opacity-80 w-screen h-screen z-50'>
      <div className='absolute top-20 left-[calc(50%-162px)] w-96 bg-slate-300'>
        <div className='flex items-center justify-between'>
          <h1>Your Score is: {finalScore}</h1>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div>
          <form>
            <input type='text' placeholder='Your Name' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('');
  const getRandomPassword = () => {
    let max = '99999999';
    setPassword(Math.round(Math.random() * max));
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border-2 border-white w-24 rounded-md '>
        <h1 className='font-bold border border-red-600 text-white'>
          Password Generator
        </h1>
        <p className='border-2 border-white text-white'>{password}</p>
        <button
          onClick={getRandomPassword}
          className='rounded-lg border-2 border-white text-white'
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;

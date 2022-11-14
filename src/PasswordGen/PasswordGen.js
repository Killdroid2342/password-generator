import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('');

  const getRandomPassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const logograms = '#$%&@^`~';
    const mathSymbols = '<+!?=';
    let characters = uppercase + lowercase + numbers + logograms + mathSymbols;
    console.log(characters);

    setPassword(Math.random().toString(16) + characters.length);
  };
  const savePassword = () => {
    navigator.clipboard.writeText(password);
    alert(`This is the password that you have copied: ${password}`);
  };
  return (
    <div className='flex flex-col items-center justify-center my-auto h-screen'>
      <div className=' border-2 border-white w-1/2 rounded-md flex flex-col items-center pb-24'>
        <h1 className='font-bold text-3xl text-white mt-10'>
          Password Generator
        </h1>
        <p className='border-2 border-white text-white p-3 rounded-2xl mt-10 font-bold '>
          {password}
        </p>
        <button onClick={getRandomPassword} className='btn'>
          Generate Password
        </button>
        <button className='btn' onClick={savePassword}>
          Copy Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;

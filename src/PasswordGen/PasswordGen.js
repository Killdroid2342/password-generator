import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('');
  return (
    <div className='border-2 border-white w-24'>
      <h1 className='font-bold border border-red-600 text-white'>
        Password Generator
      </h1>
      <p className='border-2 border-white text-white'>
        Placeholder for password
      </p>
      <button className='rounded-lg border-2 border-white text-white'>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGen;

import React from 'react';

export default function Footer() {
  return (
    <div className='bg-blue-900 h-[220px] md:h-[88px] flex flex-col md:flex-row md:justify-between items-center gap-1 '>
      <div className='mx-4 md:mx-[88px]'>
        <img
          className='mt-4 mb-4 md:mb-6 md:mt-6'
          src='/src/assets/logo2.svg'
          alt='logo'
        />
      </div>
      <div className='mx-4 md:mx-[88px] flex flex-col md:flex-row gap-4'>
        <img src='/src/assets/Telefone.svg' alt='telefone' />
        <img src='/src/assets/Zap.svg' alt='zap' />
      </div>
    </div>
  );
}

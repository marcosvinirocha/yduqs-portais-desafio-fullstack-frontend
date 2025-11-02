import React from 'react';

export default function FooterRegister() {
  return (
    <div className='bg-blue-900 h-[350px] md:h-[88px] flex flex-col md:flex-row md:justify-between items-center gap-1 '>
      <div className=' mx-4 md:hidden self-start'>
        <img
          className='mt-4 mb-4 md:mb-6 md:mt-6'
          src='/src/assets/logo2.svg'
          alt='logo'
        />
      </div>
      <div className='mx-4 my-6 md:mx-[88px] flex flex-col md:flex-row gap-4'>
        <img src='/src/assets/Telefone.svg' alt='telefone' />
        <img src='/src/assets/Zap.svg' alt='zap' />
      </div>
      <div className='mx-4 my-6 md:mx-[88px] flex flex-col md:flex-row gap-4 text-white font-sans'>
        <span>Politica de privacidade</span>
        <hr className='block md:hidden w-full border-t border-gray-300' />
        <span className='hidden md:inline text-gray-400 mx-4'>|</span>
        <span>Estácio Brasil - Todos os direitos reservados</span>
      </div>
    </div>
  );
}

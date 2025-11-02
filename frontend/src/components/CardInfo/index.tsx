import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  isRegister?: boolean;
}

export default function Cardinfo({ title, subtitle, isRegister }: CardProps) {
  return (
    <div className='h-[150px] bg-blue-700'>
      {isRegister ? (
        <div className='h-full flex flex-col justify-center items-start px-4 md:px-[88px]'>
          <h1 className='mb-2 text-4xl md:text-5xl  text-white font-serif text-center'>
            {title}
          </h1>
          <p className='text-base md:text-lg font-sans text-white text-center'>
            {subtitle}
          </p>
        </div>
      ) : (
        <div className='mx-4 md:mx-[88px] flex flex-col items-start'>
          <span className='mt-6 mb-2 md:mt-10 md:mb-2 font-serif text-2xl font-bold text-white'>
            {title}
          </span>
          <span className='mb-6 md:mb-10 font-sans text-sm text-white'>
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

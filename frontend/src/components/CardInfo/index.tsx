import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
}

export default function Cardinfo({ title, subtitle }: CardProps) {
  return (
    <div className='h-[150px] bg-blue-700'>
      <div className='mx-4 md:mx-[88px] flex flex-col items-start '>
        <span className='mt-6 mb-2 md:mt-10 md:mb-2 font-serif text-2xl font-bold text-white'>
          {' '}
          {title}
        </span>
        <span className='mb-6 md:mb-10 font-sans text-sm text-white'>
          {subtitle}
        </span>
      </div>
    </div>
  );
}

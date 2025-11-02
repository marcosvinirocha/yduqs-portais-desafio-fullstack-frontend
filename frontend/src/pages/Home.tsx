import React from 'react';
import Cardinfo from '../components/CardInfo';
import CardPresencial from '../components/CardPresencial';
import CardEad from '../components/CardEad';
import Footer from '../components/Footer';

export default function Home() {
  const CardTitleInfo = 'Vamos começar, escolha as opções do seu curso';
  const CardSubTitle =
    'Use os filtros para saber o preço do seu curso e fazer sua inscrição';
  return (
    <>
      <Cardinfo title={CardTitleInfo} subtitle={CardSubTitle} />
      <div className='mx-4 md:mx-[88px]'>
        <div className='invisible md:visible font-sans md:mt-8 md:mb-4'>
          {' '}
          2 opções encontradas
        </div>
        <div className='flex flex-col md:flex-row mb-14 gap-6'>
          <CardPresencial />
          <CardEad />
        </div>
      </div>
      <Footer />
    </>
  );
}

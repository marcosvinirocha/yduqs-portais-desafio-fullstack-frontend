import React from 'react';
import Cardinfo from '../components/CardInfo';

export default function Home() {
  const CardTitle = 'Vamos começar, escolha as opções do seu curso';
  const CardSubTitle =
    'Use os filtros para saber o preço do seu curso e fazer sua inscrição';
  return (
    <>
      <Cardinfo title={CardTitle} subtitle={CardSubTitle} />
      <div className='mx-4 md:mx-[88px]'>Home</div>
    </>
  );
}

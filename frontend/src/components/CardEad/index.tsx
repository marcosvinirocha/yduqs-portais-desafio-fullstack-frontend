import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Drawer from '../ui/drawer';
// import { FinanceEadDrawer } from '../FinanceEadDrawer';

export default function CardEad() {
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 640;

  return (
    <div>
      <div className='max-w-xs mx-auto bg-blue-700 border border-blue-700 rounded-xl shadow-lg overflow-hidden'>
        <div className='flex bg-blue-950 text-white p-3 mb-2 text-sm font-semibold'>
          <span className=' text-white font-sans pr-2'>Digital (EAD)</span>
        </div>
        <div className='p-4 mt-6'>
          <p className=' text-white text-sm mb-2'>
            <Info />
          </p>
          <div className='mb-6'>
            <span className='text-white font-sans'>
              Inscreva-se para saber tudo sobre os valores e garantir a sua vaga
            </span>{' '}
          </div>
          <button
            onClick={() => setOpen(true)}
            className='w-full bg-rose-500 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md'
          >
            Avançar
          </button>
        </div>
        <div className='px-4 pb-4 pt-2 border-t  bg-white border-gray-200'>
          <h3 className='text-sm font-bold font-sans  text-gray-900 mt-4 mb-1'>
            BARRA DA TIJUCA - TOM JOB...
          </h3>
          <p className='text-xs text-gray-600'>
            AV. DAS AMÉRICAS, 4.200, BLOCO 11 - BARRA DA TIJUCA...
          </p>
        </div>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        size={isMobile ? 'lg' : 'xl'} // opções: 'sm', 'md', 'lg', 'xl'
        isinfo={true}
        title='Mais Detalhes'
      >
        <div className='h-96 bg-gray-100 flex items-center justify-center'>
          Este é o conteúdo do drawer.
        </div>
      </Drawer>
    </div>
  );
}

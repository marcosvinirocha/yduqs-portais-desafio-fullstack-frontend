import React, { useState } from 'react';
import Drawer from '../ui/drawer';
import ParcelasTable from '../ParcelaTable';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CardPresencial() {
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 640;
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register');
  };

  const payments = [
    {
      installment: '1x R$2.613,6',
      totalAmount: 'R$ 2.613,60',
    },
    {
      installment: '3x R$900,90',
      totalAmount: 'R$ 2.702,70',
    },
    {
      installment: '6x R$465,30',
      totalAmount: 'R$ 2.791,80',
    },
    {
      installment: '9x R$320,10',
      totalAmount: 'R$ 2.880,90',
    },
    {
      installment: '12x R$247,5',
      totalAmount: 'R$ 2.966,00',
    },
    {
      installment: '15x R$200,97',
      totalAmount: 'R$ 3.014,55',
    },
    {
      installment: '18x R$169,95',
      totalAmount: 'R$ 3.059,10',
    },
  ];

  return (
    <div>
      <div className='max-w-xs mx-auto bg-blue-700 border border-blue-700 rounded-xl shadow-lg overflow-hidden'>
        <div className='flex bg-blue-950 text-white p-3 mb-2 text-sm font-semibold'>
          <span className='border-r border-white text-white font-sans pr-2'>
            Presencial
          </span>
          <span className='pl-2 text-white font-sans'>Manhã</span>
        </div>
        <div className='p-4 mt-6'>
          <p className=' text-white text-sm mb-1'>De R$ 4.752,00 por até</p>
          <div className='mb-6'>
            <span className='text-white font-sans'>18x</span>{' '}
            <span className='font-sans font-bold text-white text-4xl'>
              {' '}
              R$169,95
            </span>
            <p className='font-sans text-white'>á vista R$ 2.613,60</p>
          </div>
          <button
            data-testid='main-advance-button'
            onClick={() => setOpen(true)}
            className='w-full bg-rose-500 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md'
          >
            Avançar
          </button>
        </div>
        <div className='px-4 pb-4 pt-2 border-t  bg-white border-gray-200'>
          <h3 className='text-sm font-bold font-sans  text-gray-900 mt-4 mb-1'>
            CAMPINAS - VILA INDUSTRIAL
          </h3>
          <p className='text-xs text-gray-600'>
            RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP...
          </p>
        </div>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        size={isMobile ? 'lg' : 'xl'} // opções: 'sm', 'md', 'lg', 'xl'
        title='Mais detalhes'
      >
        <p className='pt-4 pb-4  md:pt-6 md:pb-4'>
          Qual dessas opções de parcelas voçê prefere?
        </p>
        <div className='h-96 bg-gray-100'>
          <div className='border border-blue-700 rounded-lg overflow-hidden'>
            <ParcelasTable parcelas={payments} />
          </div>

          <div className='pb-6 flex flex-col justify-between'>
            <div>
              <div className=' px-4 py-4 md:pt-8 md:pb-6 flex justify-between items-center'>
                <span>Sobre a Bolsa Incentivo</span>
                <Plus />
              </div>
              <div className=' px-4 py-4 md:pt-8 md:pb-6 flex justify-between items-center'>
                <span>Resumo das suas escolhas</span>
                <Plus />
              </div>
            </div>

            <div className='space-y-4' />
            <button
              onClick={handleRedirect}
              className='w-full bg-rose-500 hover:bg-pink-700 text-white font-bold py-4 px-4 md:px-6 md:py-4 rounded-lg transition duration-300 shadow-md'
            >
              Avançar
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

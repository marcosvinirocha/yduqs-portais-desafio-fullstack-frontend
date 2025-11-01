import React, { useState } from 'react';

type Parcela = {
  installment: string;
  totalAmount: string;
};

type ParcelasTableProps = {
  parcelas: Parcela[];
};

const ParcelasTable: React.FC<ParcelasTableProps> = ({ parcelas }) => {
  const [selected, setSelected] = useState<number>(parcelas.length - 1);

  return (
    <div className='max-w-md mx-auto  rounded-lg shadow border-0 border-blue-700'>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-blue-700  text-white font-semibold text-base'>
            <th className='px-4 py-2 w-1/2  text-left'>Parcelas</th>
            <th className='px-4 py-2 w-1/2  text-right'>Total</th>
          </tr>
        </thead>
        <tbody>
          {parcelas.map((parcela, idx) => (
            <tr
              key={idx}
              className={`cursor-pointer hover:bg-blue-50 ${
                idx < parcelas.length - 1 ? 'border-b border-blue-700' : ''
              }`}
              onClick={() => setSelected(idx)}
            >
              <td className='px-4 py-4'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    checked={selected === idx}
                    className='accent-black mr-3'
                    readOnly
                  />
                  <span className='ml-2 font-sans text-neutral-900'>
                    {parcela.installment}
                  </span>
                </div>
              </td>
              <td className='px-4 py-3 text-right font-sans text-gray-500'>
                {parcela.totalAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelasTable;

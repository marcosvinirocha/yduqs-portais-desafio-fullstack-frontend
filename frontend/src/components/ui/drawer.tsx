import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  isinfo?: boolean;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  size = 'md',
  title,
  isinfo,
  children,
}) => {
  const widthClasses = {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-104',
    xl: 'w-[500px]',
  };

  return (
    <>
      {/* Overlay com transição de opacidade */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black bg-opacity-50 transition-all duration-300 ease-in-out opacity-0 backdrop-blur-none'
          style={{
            opacity: isOpen ? 0.6 : 0,
            backdropFilter: isOpen ? 'blur(4px)' : 'blur(0)',
          }}
          onClick={onClose}
          aria-hidden='true'
        />
      )}

      {/* Painel do Drawer com animação suave */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          widthClasses[size]
        } ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        <div className='flex flex-col h-full'>
          {/* Cabeçalho */}
          {(title || onClose) && (
            <div className='flex items-center justify-between py-5 px-4 md:py-8 md:px-8 border-b border-gray-200'>
              {title && (
                <h2
                  id='drawer-title'
                  className=' font-serif text-[32px] mt-6 mb-6 text-gray-800'
                >
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className='text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1'
                aria-label='Fechar drawer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Conteúdo */}
          {isinfo && <div className='h-[150px] w-full bg-blue-700'></div>}
          <div className='flex-1 px-4 py-4 md:px-8 md:py-6 overflow-y-auto'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;

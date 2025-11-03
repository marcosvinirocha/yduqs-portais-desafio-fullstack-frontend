/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface CustomRenderOptions {
  route?: string;
  options: Omit<RenderOptions, 'wrapper'>;
}

const customRender = (
  ui: ReactElement,
  { route = '/', options = {} }: CustomRenderOptions = { options: {} }
) => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
  };

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from '@testing-library/react';
export { customRender as render };

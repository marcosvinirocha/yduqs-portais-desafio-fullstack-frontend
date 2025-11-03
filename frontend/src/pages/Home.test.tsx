import { screen, render } from '../utils/test-utils';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

test('Deve exibir o titulo da pagina Home', () => {
  render(
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );

  const titlePage = screen.getByText(
    /vamos começar, escolha as opções do seu curso/i // 💡 O texto do <span>
  );
  expect(titlePage).toBeInTheDocument();
  expect(titlePage.tagName).toBe('SPAN');
});

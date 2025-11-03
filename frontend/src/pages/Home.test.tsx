import { screen, render, within } from '../utils/test-utils';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

test('Home() renders correctly', async () => {
  const user = userEvent.setup();
  render(
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );

  const titlePage = screen.getByText(
    /vamos começar, escolha as opções do seu curso/i
  );
  expect(titlePage).toBeInTheDocument();
  expect(titlePage.tagName).toBe('SPAN');

  const subtitlePage = screen.getByText(
    /use os filtros para saber o preço do seu curso e fazer sua inscrição/i
  );
  expect(subtitlePage).toBeInTheDocument();
  expect(subtitlePage.tagName).toBe('SPAN');

  const presencialText = screen.getByText('Presencial');
  expect(presencialText).toBeInTheDocument();

  const priceTextElement = screen.getByText(/De R\$ 4\.752,00 por até/i);

  expect(priceTextElement).toBeInTheDocument();

  const mainAdvanceButton = screen.getByTestId('main-advance-button');
  expect(mainAdvanceButton).toBeInTheDocument();
  await user.click(mainAdvanceButton);

  const visibleDrawers = screen
    .getAllByRole('dialog', { name: /Mais detalhes/i })
    .filter((drawer) => drawer.classList.contains('translate-x-0'));

  expect(visibleDrawers).toHaveLength(1);

  const drawer = visibleDrawers[0];
  expect(drawer).toBeInTheDocument();

  expect(
    within(drawer).getByText(/Qual dessas opções de parcelas voçê prefere?/i)
  ).toBeInTheDocument();

  expect(within(drawer).getByRole('table')).toBeInTheDocument();
  const avancarButton = within(drawer).getByRole('button', {
    name: /avançar/i,
  });

  expect(avancarButton).toBeInTheDocument();
  await user.click(avancarButton);
});

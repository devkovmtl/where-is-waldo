import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('should render the Header', () => {
    const charactersFound = {
      Waldo: false,
      Wenda: false,
      Wizard: false,
      Odlaw: false,
    };
    const number = 1;
    let isGameOver = false;
    let finalScore = 1;
    render(
      <Header
        charactersFound={charactersFound}
        seconds={number}
        isGameOver={isGameOver}
        finalScore={finalScore}
      />
    );

    const header = screen.queryByText('Find Waldo !');
    expect(header).toBeInTheDocument();
    expect(header?.classList.contains('text-red-500')).toBe(true);
  });
});

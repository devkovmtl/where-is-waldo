import { render, screen } from '@testing-library/react';
import Header from './header';

describe('<Header />', () => {
  test('should render the Header', () => {
    render(<Header />);

    const header = screen.queryByText('Find Waldo !');
    expect(header).toBeInTheDocument();
    expect(header?.classList.contains('text-red-500')).toBe(true);
  });
});

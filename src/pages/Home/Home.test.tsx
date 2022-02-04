import { render, screen } from '@testing-library/react';
import Home from './Home';

describe.skip('<Home />', () => {
  test.skip('should render the Home Page', () => {
    render(<Home />);

    const homePage = screen.queryByText('Find Waldo !');
    expect(homePage).toBeInTheDocument();
    expect(homePage?.classList.contains('text-red-500')).toBe(true);
  });
});

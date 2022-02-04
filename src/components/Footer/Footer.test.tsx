import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  test('should render the Footer', () => {
    render(<Footer />);

    const footerElement = screen.queryByText(/copyright/i);
    expect(footerElement).toBeInTheDocument();
    expect(footerElement?.classList.contains('text-black')).toBe(true);
  });
});

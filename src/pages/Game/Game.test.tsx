import { render, screen } from '@testing-library/react';
import Game from './Game';

describe.skip('<Game />', () => {
  test.skip('should render the Game Page', () => {
    render(<Game />);

    const gamePage = screen.queryByText('');
  });
});

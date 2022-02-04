import { render, screen, fireEvent } from '@testing-library/react';
import LevelCard from './LevelCard';

import Level1BgImg from '../../images/levels/Level 1.jpg';

describe('<LevelCard />', () => {
  test('should render the Card For Level', () => {
    const handler = jest.fn;
    const levelName = 'Level Test';
    render(
      <LevelCard
        level={levelName}
        backgroundImg={Level1BgImg}
        onClickNavigate={handler}
      />
    );

    const LevelCardElement = screen.queryByText(levelName);
    expect(LevelCardElement).toBeInTheDocument();
  });

  test('should render the Image and alt For Level', () => {
    const handler = jest.fn;
    const levelName = 'Level Test';
    render(
      <LevelCard
        level={levelName}
        backgroundImg={Level1BgImg}
        onClickNavigate={handler}
      />
    );

    const LevelCardElement = screen.queryByRole('img');
    expect(LevelCardElement).toHaveAttribute('src', Level1BgImg);
    expect(LevelCardElement).toHaveAttribute('alt', "Where's Waldo");
  });
});

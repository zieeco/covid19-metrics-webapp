import { screen, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import BaseCountry from '../components/BaseCountry';

jest.mock('react-redux');

describe('test for BaseCountry component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(() => {});
    useSelector.mockReturnValue([
      {
        name: 'Nigeria',
        today_confirmed: 255001,
      },
    ]);
  });

  test('renders from the api', async () => {
    render(<BaseCountry />);
    const imageText = await screen.findByAltText(/nigeria map/i);
    expect(imageText).toBeInTheDocument();
    expect(screen.getByText(/nigeria/i)).toBeInTheDocument();
    expect(screen.getByText(/255,001/i)).toBeInTheDocument();
  });
});

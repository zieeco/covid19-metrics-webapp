import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import BaseCountry from '../components/BaseCountry';
import store from '../redux/configureStore';

const BaseCountryProvider = () => (
  <Provider store={store}>
    <BaseCountry />
  </Provider>
);

describe('test for BaseCountry component', () => {
  test('should render correctly', () => {
    const RenderedComponent = renderer.create(<BaseCountryProvider />).toJSON();
    expect(RenderedComponent).toMatchSnapshot();
  });

  test('reders from the api', async () => {
    render(<BaseCountryProvider />);
    const imageText = await screen.findByAltText(/nigeria map/i);
    console.log('the image text', typeof imageText);
    expect(imageText).toBeInTheDocument();
  });
});

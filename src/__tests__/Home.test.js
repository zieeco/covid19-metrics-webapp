import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Home from '../components/Home';

const HomeStoreProvider = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('test for Home component', () => {
  it('renders correctly', () => {
    const RenderHomeComponent = renderer.create(<HomeStoreProvider />).toJSON();
    expect(RenderHomeComponent).toMatchSnapshot();
  });
});

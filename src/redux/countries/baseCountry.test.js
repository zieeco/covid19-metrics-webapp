import store from '../configureStore';
import { loadMyBaseCountry } from './baseCountry';

describe('get the base counrty state', () => {
  const arr = [
    {
      name: 'Nigeria',
    },
  ];

  test('should return true', () => {
    store.dispatch(loadMyBaseCountry(arr));
    const result = store.getState();
    expect(result.baseCountryReducer).toMatchObject(arr);
  });
});

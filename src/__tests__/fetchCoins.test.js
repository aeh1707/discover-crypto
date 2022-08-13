// eslint-disable-next-line import/no-named-as-default
import fetchCoins from '../redux/cryptoReducer';

it('fetchCoins should return a promise', () => {
  expect(fetchCoins()).toHaveReturned();
});

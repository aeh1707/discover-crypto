/*eslint-disable*/
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/configureStore';
import TopCoins from '../components/TopCoins';

test('TopCoins component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <TopCoins />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});

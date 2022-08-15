/*eslint-disable*/
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Search from '../components/Search';

test('TopCoins component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Search />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});

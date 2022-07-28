import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import List from '../Components/List/List';

describe('List test', () => {
  it('List render correctly', () => {
    const ListPage = renderer.create(
      <Provider store={store}>
        <Router>

          <List />
        </Router>
      </Provider>,
    ).toJSON();
    expect(ListPage).toMatchSnapshot();
  });

  test('Render List component', () => {
    render(
      <Provider store={store}>
        <Router>

          <List />
        </Router>
      </Provider>,
    );
  });
});

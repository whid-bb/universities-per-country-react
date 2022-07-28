import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../Components/Home/Home';

describe('Home test', () => {
  it('Home render correctly', () => {
    const HomePage = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    ).toJSON();
    expect(HomePage).toMatchSnapshot();
  });

  test('Render Home component', () => {
    render(
      <Provider store={store}>
        <Router>

          <Home />
        </Router>
      </Provider>,
    );
  });
});

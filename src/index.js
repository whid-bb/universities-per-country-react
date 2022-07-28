import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import store from './redux/configureStore';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);

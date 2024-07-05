import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import { Provider, defaultTheme, darkTheme } from '@adobe/react-spectrum';
import App from './App';

ReactDOM.render(
  <Provider theme={darkTheme}>
    <App />
  </Provider>,
  document.getElementById('root')
);



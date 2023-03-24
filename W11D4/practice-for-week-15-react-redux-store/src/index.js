import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/index.js"
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
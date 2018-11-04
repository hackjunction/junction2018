import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Partners from './Partners';

const target = document.querySelector('#app');

render(
  <Provider store={store}>
    <div>
      <Partners />
    </div>
  </Provider>,
  target
);

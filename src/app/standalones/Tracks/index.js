import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Tracks from './Tracks';

const target = document.querySelector('#app');

console.log('going to render');
render(
  <Provider store={store}>
    <div>
      <Tracks />
    </div>
  </Provider>,
  target
);

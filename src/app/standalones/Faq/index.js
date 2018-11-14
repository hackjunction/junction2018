import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Faq from './Faq';

const target = document.querySelector('#app');

render(
  <Provider store={store}>
    <div>
      <Faq />
    </div>
  </Provider>,
  target
);

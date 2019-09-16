// Reactのブラウザとアプリ開発で共通したライブラリ
import React from 'react';
// Reactのブラウザに特化したライブラリ
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDom.render(
  <Provider store={createStore(reducer)}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>
  ,
  document.querySelector('.container'),
);

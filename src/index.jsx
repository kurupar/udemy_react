// Reactのブラウザとアプリ開発で共通したライブラリ
import React from 'react';
// Reactのブラウザに特化したライブラリ
import ReactDom from 'react-dom';
import { createStore } from 'redux';

import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDom.render(
  <SearchPage
    history={history}
    location={location}
    store={createStore(reducer)}
  />,
  document.querySelector('.container'),
);

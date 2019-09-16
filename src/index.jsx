// Reactのブラウザとアプリ開発で共通したライブラリ
import React from 'react';
// Reactのブラウザに特化したライブラリ
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import SearchPage from './components/SearchPage';
import reducer from './reducers/';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDom.render(
  <Provider store={store}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>
  ,
  document.querySelector('.container'),
);

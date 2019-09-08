// Reactのブラウザとアプリ開発で共通したライブラリ
import React from 'react';
// Reactのブラウザに特化したライブラリ
import ReactDom from 'react-dom';

import App from './components/app';

ReactDom.render(<App />, document.querySelector('.container'));

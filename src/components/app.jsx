// Reactのブラウザとアプリ開発で共通したライブラリ
import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="Bob" />
        <Greeting name="John" />
      </div>
    );
  }
}

export default App;

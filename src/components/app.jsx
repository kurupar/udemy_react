// Reactのブラウザとアプリ開発で共通したライブラリ
import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  handleNameChange(name) {
    // console.log(e.target.value);
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.handleNameChange(event.target.value)}
        />
        <button onClick={() => this.handleNameChange('Bob')}> I am Bob </button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;

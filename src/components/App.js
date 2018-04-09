import React, { Component } from 'react';

import './App.css';
import logo from './Header';
import logo from './Main';
import logo from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel, Inc" />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

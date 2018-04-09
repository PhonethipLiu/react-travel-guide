import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Header title="Wide World Travel, Inc" />
        <div className="Main-wrapper">
          <Main src="https://media.cntraveler.com/photos/571f9394fe5fd76f60bc1484/master/w_770,c_limit/manarola-italy-GettyImages-520953305.jpg"/>
        </div>

        <footer className="App-footer">
          <Footer url="https://www.lonelyplanet.com/asia" destination="Asia" info="https://www.lonelyplanet.com/asia" />
          <Footer url="" destination="" />
          <Footer url="" destination="" />
          <Footer url="" destination="" />
        </footer>
      </div>
    );
  }
}

export default App;

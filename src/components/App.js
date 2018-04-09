import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

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

        <footer className="App-footer ontainer">
          <div className="row">
            <Col>
            <Footer url="https://www.lonelyplanet.com/asia" destination="Asia" info="https://www.lonelyplanet.com/asia" />
            </Col>
            <Col>
            <Footer url="https://www.lonelyplanet.com/africa" destination="Africa" info="https://www.lonelyplanet.com/africa" />
            </Col>
            <Col>
            <Footer url="https://www.lonelyplanet.com/europe" destination="Europe" info="https://www.lonelyplanet.com/europe" />
            </Col>
            <Col>
            <Footer url="https://www.lonelyplanet.com/australia" destination="Australia "  info="https://www.lonelyplanet.com/australia"/></Col>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

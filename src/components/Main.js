import React, { Component } from 'react';

import './App.css';
import travel from './../images/travel.jpg';

function Main(props) {
    return(
        <div>
            <img src={travel} className="Main-background" alt="World travel illustration" />
        </div>
    )
}

export default Main;
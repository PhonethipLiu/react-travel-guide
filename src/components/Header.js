import React from 'react';
import './App.css';

function Header(props) {
    return(
        <header>
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

export default Header;
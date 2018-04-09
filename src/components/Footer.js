import React, { Component } from 'react';


import './App.css';

function Footer(props) {
    return(
        <li><a href="{props.url}">{props.destination}</a>&emsp;
        {props.info}</li>
    )
}

export default Footer;
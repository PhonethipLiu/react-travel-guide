import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

function Footer(props) {
    return(
        <li><a href="{props.url}">{props.destination}</a>
        {props.info}</li>
    )
}

export default Footer;
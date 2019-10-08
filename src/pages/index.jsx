import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from "react";
import styled from 'styled-components';
import '../style-utilities/layout.css';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';

class Index extends Component {
    render() {
        return (
            <>  
                <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
                <Navigation></Navigation>
                <Header></Header>
                <p>Index Page</p>
            </>
        );
    }
}

export default Index;
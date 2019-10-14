import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from "react";
import styled from 'styled-components';
import '../style-utilities/layout.css';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Square from '../components/Square';

class Index extends Component {
    render() {
        return (
            <>  
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Byron Chang</title>
                    <link rel="canonical" href="https://byronchang.com/" />
                    <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway&display=swap" rel="stylesheet"></link>
                </Helmet>
                
                <Navigation></Navigation>
                <Header></Header>
                <Square></Square>
                <p>Index Page</p>
            </>
        );
    }
}

export default Index;
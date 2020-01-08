import { Helmet } from "react-helmet"
// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from "react";
// import styled from 'styled-components';
import '../style-utilities/layout.css';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Square from '../components/Square';
import WorkHistory from '../components/WorkHistory';
import AboutMe from '../components/AboutMe';

class Index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Nunito|Open+Sans&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <title>Byron Chang</title>
          <link rel="canonical" href="https://byronchang.com/" />
        </Helmet>

        <Navigation />
        <Header></Header>
        <AboutMe></AboutMe>
        <Square />
        <WorkHistory />
      </>
    );
  }
}

export default Index;
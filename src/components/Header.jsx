import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';

const StyledHeader = styled.div`
  background-color: ${colors.purple};
  background: linear-gradient(-45deg, ${colors.purple}, ${colors.blue});
  background-size: 100% 100%;
  color: ${colors.white};
  height: 760px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    max-width: 600px;
    text-align: center;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -80px;
  -webkit-transform: skewY(12deg);
  transform: skewY(12deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  background: -o-linear-gradient(240deg, #282828 15%, #373737 70%, #3c4859 94%);
  background: linear-gradient(-150deg, #282828 15%, #373737 70%, #3c4859 94%);
  span {
    -webkit-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    position: absolute;
    height: 190px;
  }
  span:nth-child(1) {
    display: none;
    top: 0;
    width: 33.33333%;
    right: -16.66666%;
    background: #373737;
  }
  span:nth-child(2) {
    width: 33.33333%;
    top: 0;
    right: 16.66666%;
    left: auto;
    bottom: auto;
    background: #2e2e2e;
  }
  span:nth-child(3) {
    width: 33.33333%;
    right: 49.99999%;
    bottom: auto;
    left: auto;
    background: #222222;
  }
  span:nth-child(4) {
    width: 33.33333%;
    top: 380px;
    left: -16.66666%;
    background: #383d44;
  }
  span:nth-child(5) {
    width: 33.33333%;
    right: 0;
    bottom: 0;
    background: #2e2e2e;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader className="container-fluid">
        <StyledBackground>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBackground>
        <header>
          {/* <h1>Hello, my name is Byron Chang.</h1> */}
          <p>Helping start-ups, small businesses, and agencies achieve high quality applications and exceptional user experience</p>
        </header>
      </StyledHeader>
    );
  }
}

export default Header;
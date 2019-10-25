import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../../style-utilities/variables';
import SVGMask from '../../images/logo-mask.svg';

const StyledNavigation = styled.nav`
  background-color: ${colors.grey};
  .nav-link {
    font-family: 'Quicksand', sans-serif;
    color: ${colors.volt};
    transition: 0.3s;
  }
  .nav-link:hover {
    color: ${colors.white};
  }
  .active {
    color: ${colors.white};
  }
  .logo {
    background-color: ${colors.volt};
    background: linear-gradient(-45deg,  ${colors.blue}, ${colors.volt}, ${colors.blue}, ${colors.volt});
    background-size: 300% 300%;
    animation: logoTransition 15s ease infinite;
  }

  @keyframes logoTransition {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

class Navigation extends Component {
  render() {
    return (
      <StyledNavigation className="navbar navbar-light">

        <a class="navbar-brand" href="#">
          <img src={SVGMask} height="32" class="logo d-inline-block align-top" alt="" />
          {/* {ReactDOM.render({SVG})} */}
        </a>

        <ul class="nav" id="navbarToggleExternalContent">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#code">Code Samples</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resume">Work History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        {/* <nav class="navbar navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav> */}
      </StyledNavigation>
    );
  }
}

export default Navigation;
import React, { Component } from "react";
import styled from 'styled-components';
import { colors, breakpoints } from '../../style-utilities/variables';
import SVGMask from '../../images/logo-mask.svg';

const StyledNavigation = styled.nav`
  /* background-color: ${colors.grey}; */
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;

  .nav-link.link-custom {
    font-family: 'Quicksand', sans-serif;
    color: #ffffff !important;
    transition: 0.3s;
  }
  .nav-link.link-custom:hover {
    color: ${colors.volt} !important;
  }
  .active {
    color: ${colors.volt} !important;
  }
  .logo {
    background-color: ${colors.volt};
    background: linear-gradient(-45deg,  ${colors.blue}, ${colors.volt}, ${colors.blue}, ${colors.volt});
    background-size: 300% 300%;
    animation: logoTransition 15s ease infinite;
  }
  .link-custom {
    border-bottom: 1px solid ${colors.white};
    text-align: center;
  }
  .nav-item:last-child .nav-link {
    border-bottom: none;
  }

  @media (min-width: ${breakpoints.tablet}) {
    .nav-link {
      border-bottom: none;
    }
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
      <StyledNavigation className="navbar navbar-expand-sm navbar-dark">
        {/* <a class="navbar-brand" href="#">
          <img src={SVGMask} height="32" class="logo d-inline-block align-top" alt="" />
        </a> */}
        <div class="navbar-brand" href="#">
          <img src={SVGMask} height="32" class="logo d-inline-block align-top" alt="" />
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link link-custom" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-custom" href="#square">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-custom" href="#code">Code</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-custom" href="#resume">Work History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-custom" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* <ul class="nav" id="navbarToggleExternalContent">
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
        </ul> */}
      </StyledNavigation>
    );
  }
}

export default Navigation;
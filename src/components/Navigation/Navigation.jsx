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

        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Byron Chang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Code Samples</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Work History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

      </StyledNavigation>
    );
  }
}

export default Navigation;
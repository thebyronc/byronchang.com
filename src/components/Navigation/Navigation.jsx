import React, { Component } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { colors } from '../../style-utilities/variables';
import Byron from '../../images/logo.png';
import SVG from '../../images/resized.svg';
const StyledNavigation = styled.nav`
    /* background-color: ${colors.purple}; */
    /* height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center; */
    .nav-link {
        color: ${colors.volt};
    }
    .nav-link:hover {
        color: ${colors.white};
    }
    .active {
        color: ${colors.white};
    }
`;

class Navigation extends Component {
    render() {
        return (
            <StyledNavigation className="navbar navbar-light">

                <a class="navbar-brand" href="#">
                    <img src={SVG} height="32" class="logo d-inline-block align-top" alt="" />
                    {/* {ReactDOM.render({SVG})} */}
                </a>

                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Me Myself and I</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Code</a>
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
import React, { Component } from "react";
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
`;

class Navigation extends Component {
    render() {
        return (
            <StyledNavigation className="navbar navbar-light">

                <a class="navbar-brand" href="#">
                    <img src={SVG} height="32" class="d-inline-block align-top" alt="" />
                    
                </a>

            </StyledNavigation>
        );
    }
}

export default Navigation;
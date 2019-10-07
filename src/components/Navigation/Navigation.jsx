import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../../style-utilities/variables';

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
                    {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""> */}
                    Byron Chang
                </a>

            </StyledNavigation>
        );
    }
}

export default Navigation;
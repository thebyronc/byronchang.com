import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';


const StyledHeader = styled.div`
    background-color: ${colors.purple};
    height: 75vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    header {
        width: 100%;
        max-width: 550px;
    }
`;

class Header extends Component {
    render() {
        return (
            <StyledHeader className="container-fluid">
                <header>
                    <h1>Full-Stack Developer</h1>
                    <p>Helping start-ups, small businesses, and agencies achieve high quality websites and exceptional user experience</p>
                </header>
            </StyledHeader>
        );
    }
}

export default Header;
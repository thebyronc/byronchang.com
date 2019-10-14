import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';


const StyledHeader = styled.div`
    background-color: ${colors.purple};
    background: linear-gradient(-45deg, ${colors.purple}, ${colors.blue});
    background-size: 100% 100%;
    color: ${colors.white};
    height: 75vh;
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

class Header extends Component {
    render() {
        return (
            <StyledHeader className="container-fluid">
                <header>
                    <h1>Hello, my name is Byron Chang.</h1>
                    <p>Helping start-ups, small businesses, and agencies achieve high quality applications and exceptional user experience</p>
                </header>
            </StyledHeader>
        );
    }
}

export default Header;
import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';


const StyledHeader = styled.div`
    background-color: ${colors.purple};
<<<<<<< HEAD
    background-image: linear-gradient(to right, ${colors.purple}, ${colors.blue});
    /* color: ${colors.volt}; */
=======
    background: linear-gradient(-45deg, ${colors.purple}, ${colors.blue});
    background-size: 100% 100%;
    color: ${colors.white};
>>>>>>> 1a0ab7e69fe0addee263b1ac6bb844de8f40741f
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
<<<<<<< HEAD
                    <h1>Full-Stack Developer</h1>
                    <p>Hi, my name is <strong>Byron Chang</strong>, I help start-ups, small businesses, and agencies achieve high quality websites and exceptional user experience</p>
=======
                    <h1>Hello, my name is Byron Chang.</h1>
                    <p>Helping start-ups, small businesses, and agencies achieve high quality applications and exceptional user experience</p>
>>>>>>> 1a0ab7e69fe0addee263b1ac6bb844de8f40741f
                </header>
            </StyledHeader>
        );
    }
}

export default Header;
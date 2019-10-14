import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';


const StyledSquareItem = styled.div`
    background-color: ${colors.white};
    background: linear-gradient(-45deg, ${colors.white}, #fff, ${colors.white});
    background-size: 300% 300%;
    color: ${colors.grey};
    height: 33vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    img {
        max-width: 50%;
    }

    &.red {
        background: linear-gradient(-45deg, ${colors.red}, #F48297, ${colors.red});
        background-size: 300% 300%;
        color: ${colors.white};
    }

    &.orange {
        background: linear-gradient(-45deg, ${colors.orange}, #FCBE12, ${colors.orange});
        background-size: 300% 300%;
        color: ${colors.white};
    }

    &.blue {
        background: linear-gradient(-45deg, ${colors.blue}, #4AD9D9, ${colors.blue});
        background-size: 300% 300%;
        color: ${colors.white};
    }

    &.volt {
        background: linear-gradient(-45deg, ${colors.volt}, #8FFFA0, ${colors.volt});
        background-size: 300% 300%;
        color: ${colors.grey};
    }

    &.purple {
        background: linear-gradient(-45deg, ${colors.purple}, #A8ADFF, ${colors.purple});
        background-size: 300% 300%;
        color: ${colors.white};
    }

    &.grey {
        background: linear-gradient(-45deg, ${colors.grey}, #464646, ${colors.grey});
        background-size: 300% 300%;
        color: ${colors.white};
    }

    &:hover {
        animation: bgTransition 3s ease infinite;
    }

    @keyframes bgTransition {
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

class SquareItem extends Component {
    render() {
        return (
            <StyledSquareItem className={`col ${this.props.color}`}>
                {this.props.children}
            </StyledSquareItem>
        );
    }
}

export default SquareItem;
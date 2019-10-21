import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';
import SquareItem from './SquareItem';
import SummitFalcon from '../images/Falcon-Logo-no-background.png'

const StyledSquare = styled.div`
  color: ${colors.white};
`;

class Square extends Component {
  render() {
    return (
      <StyledSquare className="container-fluid">
        <div className="row">
          <SquareItem color={''}>
            <h2>hello</h2>
          </SquareItem>
          <SquareItem color={'grey'}>
            <img src={SummitFalcon} alt="Summit Wushu" />
            <h2>Summit Wushu</h2>
          </SquareItem>
          <SquareItem color={''}>
            <h2>hello</h2>
          </SquareItem>
        </div>
        
        <div className="row">
          <SquareItem color={'volt'}>
            <h2>hello</h2>
          </SquareItem>
          <SquareItem color={'blue'}>
            <h2>hello</h2>
          </SquareItem>
          <SquareItem color={'purple'}>
            <h2>hello</h2>
          </SquareItem>
        </div>
      </StyledSquare>
    );
  }
}

export default Square;
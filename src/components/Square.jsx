import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';
import SquareItem from './SquareItem';
import SummitFalcon from '../images/Falcon-Logo-no-background.png';
import PortlandAutoShow from '../images/portlandautoshow.png';

const StyledSquare = styled.div`
  color: ${colors.white};
`;

class Square extends Component {
  render() {
    return (
      <StyledSquare className="container-fluid" id="square">
        <div className="row">
          <SquareItem color={''} itemInfo={'Portland Auto Show'}>
            <img src={PortlandAutoShow} alt="Portland Auto Show" />
          </SquareItem>
          <SquareItem color={'grey'} itemInfo={'Summit Wushu Academy'}>
            <img src={SummitFalcon} alt="Summit Wushu" />
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
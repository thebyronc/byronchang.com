import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';

import JigglyPuff from '../images/pokemon-jigglypuff.jpg';

const StyledAboutMe = styled.div`
  /* background-color: ${colors.white}; */

  color: ${colors.grey};
  .row {
    margin: 32px 0 32px;
  }
  .header {
    text-align: center;
    margin: 64px 0;
    text-transform: uppercase;
  }
  img {
    margin: 0px 0 15px 0;
    max-width: 150px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <StyledAboutMe className="container">
        <div className="row">
          <div class="col-md-8">
            <p>
              I've been working in HTML/CSS/JS for over 5 years creating web based training materials. After working with full time software engineers, I became fascinated with the software development process so I enrolled in Epicodus a coding bootcamp to become a full time developer. As a developer I have been working on customer facing web-applications using a wide variety of technologies, with React.js being one of my core focus. As a developer I've worked on client projects such as Portland Trail Blazers, Riviana Inc., Coca-Cola Company, Legacy Health/GoHealth, Jaguar/Land Rover, Chuck E. Cheese, KinderCare, Aflac, Portland Auto Show, and Beaverton Auto Group.
            </p>
          </div>

          <div class="col-md-4">
            <img src={JigglyPuff} alt="Profile" />
          </div>
        </div>

      </StyledAboutMe>
    );
  }
}

export default AboutMe;
import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';

import AnsiraLogo from '../images/ansira.png';
import EpicodusLogo from '../images/epicodus.png';

const StyledWorkHistory = styled.div`
  background-color: ${colors.white};
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

class WorkHistory extends Component {
  render() {
    return (
      <StyledWorkHistory className="container">
        <div className="row">
          <div class="col">
            <h1 className="header">Work History</h1>
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <h2>Developer</h2>
            <p>August 2018 - Present</p>
            <img src={AnsiraLogo} alt="ansira" />
          </div>
          <div class="col-md-9">
            <ul>
              <li>
                Clients projects: Portland Trail Blazers, Riviana, Coca-Cola Company, Legacy Health/GoHealth, Jaguar/Land Rover, Chuck E. Cheese, KinderCare, Portland Auto Show.
              </li>
              <li>
                Built web functionality based on InVision, AdobeXD, and Photoshop mockups with careful attention to detail. Made additional design decisions to ensure consistency within the existing design.
              </li>
              <li>
                Developed web applications using the following technologies: React.js, Vue.js, Docker, Composer, MySQL, AWS EC2, flat file databases, Node.js, Drupal, and more.
              </li>
              <li>
                Collaborated with developer teams in Dallas, TX to build out large multi-sites with a core template.
              </li>
              <li>
                Managed site migrations to and from multiple instances, while standardizing the instance configuration with .bash_profiles, git pipeline, ssl cert, wiki and readme’s for future developers and devOps.
              </li>
              <li>
                Redesigned and streamlined the intern hiring process and improved the overall skill level of the hired interns. Facilitated new hire orientation.
              </li>
              <li>
                Facilitated client calls with their development teams to collaborate on solutions.
              </li>
              <li>
                Developed technical documentation for client use.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <h2>Student</h2>
            <p>November 2017 - May 2018</p>
            <img src={EpicodusLogo} alt="EPICODUS" />
          </div>
          <div class="col-md-9">
            <ul>
              <li>
                Clients projects: Portland Trail Blazers, Riviana, Coca-Cola Company, Legacy Health/GoHealth, Jaguar/Land Rover, Chuck E. Cheese, KinderCare, Portland Auto Show.
              </li>
              <li>
                Built web functionality based on InVision, AdobeXD, and Photoshop mockups with careful attention to detail. Made additional design decisions to ensure consistency within the existing design.
              </li>
              <li>
                Developed web applications using the following technologies: React.js, Vue.js, Docker, Composer, MySQL, AWS EC2, flat file databases, Node.js, Drupal, and more.
              </li>
              <li>
                Collaborated with developer teams in Dallas, TX to build out large multi-sites with a core template.
              </li>
              <li>
                Managed site migrations to and from multiple instances, while standardizing the instance configuration with .bash_profiles, git pipeline, ssl cert, wiki and readme’s for future developers and devOps.
              </li>
              <li>
                Redesigned and streamlined the intern hiring process and improved the overall skill level of the hired interns. Facilitated new hire orientation.
              </li>
              <li>
                Facilitated client calls with their development teams to collaborate on solutions.
              </li>
              <li>
                Developed technical documentation for client use.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row">
          <p>hi</p>
        </div>
      </StyledWorkHistory>
    );
  }
}

export default WorkHistory;
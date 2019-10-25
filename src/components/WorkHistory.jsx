import React, { Component } from "react";
import styled from 'styled-components';
import { colors } from '../style-utilities/variables';

import AnsiraLogo from '../images/ansira.png';
import EpicodusLogo from '../images/epicodus.png';
import NikeLogo from '../images/nike.png';

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
            <p>I have over 7 years of experience in designing and creating web-based training for a global audience and over a year developing consumer-facing web applications. I am an initiator and a quick learner with effective leadership abilities and am equally adept at collaborating with others in an Agile environment. I went to coding school to learn how to develop Java based applications and have gained over a year of professional experience developing on a wide range of technologies including: React.js, Docker, Vue.js, MySQL, AWS EC2, Flat file databases, Node.js, and more. </p>
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <h2>Developer</h2>
            <ul className="list-unstyled">
              <li>Ansira</li>
              <li>August 2018 - Present</li>
            </ul>
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
            <ul className="list-unstyled">
              <li>Epicodus</li>
              <li>November 2017 - May 2018</li>
            </ul>
            <img src={EpicodusLogo} alt="EPICODUS" />
          </div>
          <div class="col-md-9">
            <ul>
              <li>
                Managed coding projects via GitHub. Executed project merges and resolved coding conflicts of multiple programmers.
              </li>
              <li>
                Developed personal portfolio using HTML, CSS, AngularJS, JQUERY, FireBase, and node.js
              </li>
              <li>
                Developed RESTful Java based server while using H2 SQL.
              </li>
              <li>
                Designed and Developed Android Applications using Android Studio 3.0.1, Butterknife, and NoSql Firebase.
              </li>
              <li>
              Paired Programming through the entire course of Epicodus.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <h2>Instructional Designer</h2>
            <ul className="list-unstyled">
              <li>Nike Inc.</li>
              <li>Contract-ETW</li>
              <li>January 2016 to April 2017</li>
            </ul>
            <img src={NikeLogo} alt="NIKE INC." />
          </div>
          <div class="col-md-9">
            <ul>
              <li>
                Designed and Developed highly customized SharePoint Sites with emphasis on team branding.
              </li>
              <li>
                Developed simulation based training using Adobe Captivate, Adobe Premiere, Ancile uPerform.
              </li>
              <li>
                Developed End-To-End training curriculum for Program Managers and facilitated train the trainer sessions.
              </li>
              <li>
                Designed and developed team branded Word, PowerPoint, and PDF templates so that material coming from team will look consistent. 
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div class="col-md-3">
            <h2>Technical Writer</h2>
            <ul className="list-unstyled">
              <li>Nike Inc.</li>
              <li>FTE</li>
              <li>August 2010 to June 2015</li>
            </ul>
            <img src={NikeLogo} alt="NIKE INC." />
          </div>
          <div class="col-md-9">
            <p>
              Part of the Nike Global Transition Management Team that developed and spearheaded Transition Management practices for projects within Nike.
            </p>
            <ul>
              <li>
                Developed web based training program for new content authors that will create content for the consumer facing Nike.com. Using the ADKAR Model for adult learning methodologies as a basis for the curriculum.
              </li>
              <li>
                Designed monthly newsletters for a global audience of 600+ web designers and stakeholders to share best practices and standards in designing web content for Nike.com.
              </li>
              <li>
                Strong technical background with years of server side management for Content Management Systems including Adobe CQ5, Ancile uPerform, IBM Cognos, Wordpress. 
              </li>
              <li>
                Using a variety of Learning Management Systems to provide easy access to online courses and individual user tracking. 
              </li>
              <li>
                Developed simulation-based training, using screen capture software, Adobe Captivate, Ancile uPerform, and Adobe Premiere.
              </li>
              <li>
                Created targeted training programs for business-critical software, including SAP, IBM Cognos, Adobe CQ5, Wordpress, Service-Now, and SharePoint, ensuring all users received relevant training.
              </li>
              <li>
                5 years of experience creating training programs for business critical software, SAP, IBM Cognos, Adobe CQ5, Wordpress, Service-Now, SharePoint.
              </li>
              <li>
                Worked in tandem with software engineers through bi-weekly Agile process, learning and translating technical jargon into simple language.
              </li>
              <li>
                Organized and facilitated online training sessions for audiences in China, Japan, India, UK, Mexico, and numerous others.
              </li>
            </ul>
          </div>
        </div>
      </StyledWorkHistory>
    );
  }
}

export default WorkHistory;
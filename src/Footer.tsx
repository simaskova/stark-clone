import React from "react";
import styled from "styled-components";
import StarkLogo from "./StarkLogo";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;


const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
  line-height: 1rem;

  p {
    font-weight: bold;
  }
  
  ul {
    list-style-type: none;
    padding: 0; 
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Row>
        <Column>
          <p>Downloads</p>
          <ul>
            <li>Adobe XD</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Chrome</li>
          </ul>
        </Column>
        <Column>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Library</li>
            <li>Support</li>
            <li>Newsletter</li>
            <li>Mac Beta</li>
            <li>Release Notes</li>
          </ul>
        </Column>
        <Column>
          <p>Community</p>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Slack</li>
            <li>YouTube</li>
            <li>Meetup</li>
            <li>Dribble</li>
          </ul>
        </Column>
        <Column>
          <p>Support</p>
          <ul>
            <li>My Account</li>
            <li>Support</li>
            <li>Contact Us</li>
            <li>Feature Requests</li>
          </ul>
        </Column>
        <Column>
          <p>Company</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Security Overview</li>
            <li>Terms of Service</li>
            <li>Code of Conduct</li>
          </ul>
        </Column>
      </Row>
      <div>
        <h3>
          Cloned by simaskova from original by Stark Lab, inc. Copyright 2022
        </h3>
        <StarkLogo />
      </div>
    </FooterContainer>
  );
}

export default Footer;
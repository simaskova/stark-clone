import React from "react";
import styled from "styled-components";
import { spacer_0_5, spacer_1_5, StyledH3 } from "../App";
import StarkLogo from "../StarkLogo";
import { theme } from "../theme";

const FooterContainer = styled.footer`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  padding: 0 1.5rem;
  width: 100%;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: grid;
  column-gap: ${spacer_1_5};
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  row-gap: ${spacer_1_5};
  justify-items: start;
  margin-top: 4rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const H3Footer = styled((props) => <StyledH3 {...props} />)``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start; 
  line-height: 1rem;
  letter-spacing: .1em;
  line-height: 21px;

  p {
    font-family: "Armin Grotesk Black"; 
    text-transform: uppercase;
    font-weight: 900;
    font-size: .875rem;
    margin: 0 0 ${spacer_0_5} 0;
  }
  
  ul {
    font-family: "Armin Grotesk Semibold";    
    list-style-type: none;
    padding: 0; 
    margin: 0;

    li {
      margin-bottom: .5rem;

      a {
        text-decoration: none;
        text-transform: none;
        font-weight: 500;
        font-size: 1rem;    
        letter-spacing: .02em;
        line-height: 24px;
        color: ${theme.colors.dimgray}
      }
    }
  }
`;

const DivCopyright = styled.div`
  margin-top: 1.5rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LinksContainer>
          <Column>
            <ul>
              <p>Downloads</p>
              <li><a href="https://pages.adobe.com/xd/en/xd-plugin-download/?name=6cbf275e">Adobe XD</a></li>
              <li><a href="https://www.getstark.co/sketch/download/">Sketch</a></li>
              <li><a href="https://www.figma.com/community/plugin/732603254453395948/Stark">Figma</a></li>
              <li><a href="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm">Chrome</a></li>
            </ul>
          </Column>
          <Column>
            <ul>
              <p>Resources</p>
              <li><a href="https://www.getstark.co/blog/">Blog</a></li>
              <li><a href="https://www.getstark.co/library/">Library</a></li>
              <li><a href="https://www.getstark.co/support/">Support</a></li>
              <li><a href="https://www.getstark.co/newsletter/">Newsletter</a></li>
              <li><a href="https://www.getstark.co/mac-beta/">Mac Beta</a></li>
              <li><a href="https://www.notion.so/getstarkco/Stark-Release-Notes-67fea47db3a7409ea4322c73074b1184">Release Notes</a></li>
            </ul>
          </Column>
          <Column>
            <ul>
              <p>Community</p>
              <li><a href="https://twitter.com/getstarkco">Twitter</a></li>
              <li><a href="https://www.instagram.com/getstarkco/">Instagram</a></li>
              <li><a href="https://www.getstark.co/slack/">Slack</a></li>
              <li><a href="https://www.youtube.com/channel/UCnhYIgXU1GsrLnLv-NFqVNw/featured">YouTube</a></li>
              <li><a href="https://www.meetup.com/getstarkco/">Meetup</a></li>
              <li><a href="https://dribbble.com/getstarkco">Dribble</a></li>
            </ul>
          </Column>
          <Column>
            <ul>
              <p>Support</p>
              <li><a href="https://account.getstark.co/">My Account</a></li>
              <li><a href="https://www.getstark.co/support/">Support</a></li>
              <li><a href="https://www.getstark.co/support/contact-us/">Contact Us</a></li>
              <li><a href="https://feedback.getstark.co/">Feature Requests</a></li>
            </ul>
          </Column>
          <Column>
            <ul>
              <p>Company</p>
              <li><a href="https://www.getstark.co/privacy/">Privacy Policy</a></li>
              <li><a href="https://www.getstark.co/cookies/">Cookie Policy</a></li>
              <li><a href="https://www.getstark.co/security/">Security Overview</a></li>
              <li><a href="https://www.getstark.co/security/">Terms of Service</a></li>
              <li><a href="https://github.com/stark-contrast/code-of-conduct">Code of Conduct</a></li>
            </ul>
          </Column>
        </LinksContainer>
        <DivCopyright>
          <Row>
            <H3Footer>
              Cloned by simaskova from original by Stark Lab, inc. Copyright 2022
            </H3Footer>
            <StarkLogo />
          </Row>
        </DivCopyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
import React from "react";
import { MdLocalFireDepartment } from "react-icons/md";
import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  background: inherit;
`;

export default function Footer() {
  return (
    <DivContainer>
      <div>
        <div>
          <p>Downloads</p>
          <ul>
            <li>Adobe XD</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Chrome</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Library</li>
            <li>Support</li>
            <li>Newsletter</li>
            <li>Mac Beta</li>
            <li>Release Notes</li>
          </ul>
        </div>
        <div>
          <p>Community</p>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Slack</li>
            <li>YouTube</li>
            <li>Meetup</li>
            <li>Dribble</li>
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            <li>My Account</li>
            <li>Support</li>
            <li>Contact Us</li>
            <li>Feature Requests</li>
          </ul>
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Security Overview</li>
            <li>Terms of Service</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>
          Cloned by simaskova from original by Stark Lab, inc. Copyright 2022
        </h3>
        <MdLocalFireDepartment />
      </div>
    </DivContainer>
  );
}

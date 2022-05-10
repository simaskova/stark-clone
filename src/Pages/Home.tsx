import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { theme } from "../theme";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledP,
} from "../App";

const DivContainer = styled.div``;
const DivAbout = styled.div``;
const Main = styled.main``;

export default function Home() {
  return (
    <DivContainer>
      <DivAbout>
        <StyledH3>Introducing Stark</StyledH3>
        <StyledH1>Make the world’s software more accessible</StyledH1>
        <StyledP>
          More than 500,000 designers, developers and product managers at
          companies of all sizes have used Stark’s integrated suite of tools to
          make their software products more accessible and compliant. Join them
          and get started today!
        </StyledP>
        <button>Sign up for free</button>
        <button>Learn more</button>
      </DivAbout>
      <Main>
        <section>
          <StyledH3>Check it out</StyledH3>
          <StyledH2>See Stark in action.</StyledH2>
          <StyledP>
            Baked right into Figma, Sketch, Adobe XD and Google Chrome, watch
            how Stark makes designing with accessibility in mind easier than
            ever before.
          </StyledP>
          {/* component with tabs for Figma, Adobe XD, Sketch and Chrome */}
          <img
            src="" // https://www.getstark.co/chrome-action-1.png
            alt="stark-in-action"
          ></img>
          {/*  */}
        </section>
        <section>
          <StyledH2>Accessibility for everyone</StyledH2>
          <StyledP>
            While Stark today lives in your design and development software, it
            supports you and your team through the entire product lifecycle.
            And, here’s how.
          </StyledP>
          {/* 2x2 layout */}
          <div>
            <div>
              <StyledH3>FROM IDEA TO PRODUCTION</StyledH3>
              <StyledH4>Work with accessibility in mind</StyledH4>
              <StyledP>
                Stark makes it effortless to design and build accessible
                products from the start by providing you the right tools right
                where you need them: your design and dev software of choice.
              </StyledP>
            </div>
            <div>
              <StyledH3>SHOW DON’T TELL</StyledH3>
              <StyledH4>Get your team on board</StyledH4>
              <StyledP>
                With Stark you can show—not just tell—your team, partners and
                stakeholders how accessible your product is. A picture always
                says more than 1,000 words.
              </StyledP>
            </div>
            <div>
              <StyledH3>RAPID RETROFITTING</StyledH3>
              <StyledH4>Update your existing design system</StyledH4>
              <StyledP>
                Use Stark to make changes and updates to your existing
                components to ensure your design system meets current
                accessibility standards.
              </StyledP>
            </div>
            <div>
              <StyledH3>ON THE FLY QA</StyledH3>
              <StyledH4>Check your product compliance</StyledH4>
              <StyledP>
                Designer, PMs and Engineers use Stark to check on UI elements
                and code to ensure they are accessible and meet legal
                requirements and standards.
              </StyledP>
            </div>
          </div>
        </section>
        {/*  */}
        <section>
          <StyledH3>Features</StyledH3>
          <StyledH2>All the things you can do</StyledH2>
          <div>
            <StyledP>
              Inspect contrast levels in your designs with Contrast Checker
            </StyledP>
            <StyledP>
              Dig deeper into your project's colors with Vision Generator
            </StyledP>
            <StyledP>
              Discover AA and AAA passing color alternatives with Smart Color
              Suggestions
            </StyledP>
            <StyledP>
              Evaluate changes on the fly with our Chrome extension
            </StyledP>
            <StyledP>
              Experience your design through another's eyes with Vision
              Simulations
            </StyledP>
            <StyledP>
              Simplify handoffs with sequences built in Focus Order
            </StyledP>
          </div>
        </section>
        <section>
          <StyledH3>Customers</StyledH3>
          <StyledH2>
            More than 500,000 designers, developers and PMs trust Stark.
          </StyledH2>
          <div>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
          </div>
          <button>Sign up for free</button>
        </section>
      </Main>
      <Footer />
    </DivContainer>
  );
}

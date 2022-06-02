/** 
 * TODO
 *  spojazdniť global styles
 *  vyriešiť TS7016 error v App.tsx
 *  opraviť stark logo
 *  farba/shadow na buttone pri hoveri
 * */ 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Blog from "./Pages/Blog";
import Pricing from "./Pages/Pricing";
import Support from "./Pages/Support";
import Community from "./Pages/Community";
import Library from "./Pages/Library";
import MacBeta from "./Pages/MacBeta";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import styled from "styled-components";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import GlobalFonts from './fonts/fonts';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Components/Footer";
library.add(faBars, faXmark);

export const DESKTOP_BREAKPOINT = 935;
export const MOBILE_BREAKPOINT = 845;
export const spacer_0_375 = "0.375rem";
export const spacer_0_5 = ".5rem";
export const spacer_1 = "1rem";
export const spacer_1_5 = "1.5rem";
export const spacer_2 = "2rem";
export const spacer_2_75 = "2.75rem";
export const spacer_3 = "3rem";
export const spacer_4 = "4rem";
export const spacer_5 = "5rem";

const DivWrapper = styled.div`
  top: 0;
  left: 0;
  padding: 0 ${spacer_1_5};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid pink; */
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
  overflow-x: hidden;
  color: ${theme.colors.crowblackblue};
  /* border: 2px solid green; */
`;

export const StyledH1 = styled.h1`
  margin: 0;
  font-family: "Armin Grotesk Black";
  font-size: 2.5rem;
  line-height: 44px;
  letter-spacing: -.02em;

  @media (min-width: 400px) {
    font-size: 3rem;
    line-height: 54px;
  };

  @media (min-width: 600px) {
    font-size: 5.375rem;
    line-height: 96px;
  };
`;
export const StyledH2 = styled.h2`
  margin: 0;
  font-family: "Armin Grotesk Black";
  font-size: 1.75rem;
  line-height: 31px;
  /* font: normal normal 900 1.75rem/31px ${theme.fontFamilies.h2}; */
  letter-spacing: -.01em;

  @media (min-width: 400px) {
  font-size: 2rem;
  line-height: 35px;
  };

  @media (min-width: 600px) {
  font-size: 3rem;
  line-height: 53px;
  };
`;
export const StyledH3 = styled.h3` /* props in styled components? napr. pre Card.tsx potrebuje StyledH3 inu farbu */
  margin: 0.286rem 0 1rem 0;
  font-family: "Roboto Mono";
  color: ${theme.colors.mediumblue};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
export const StyledH4 = styled.h4`
  font-family: "Armin Grotesk Black";
  font-size: 1.375rem;
  line-height: 24px;
  letter-spacing: -.01em;

  @media (min-width: 400px) {
    font-size: 1.5rem;
  };

  @media (min-width: 600px) {
    font-size: 1.5rem;
    line-height: 26px;
  };
`;
export const StyledH5 = styled.h5`
  font-family: "Armin Grotesk Semibold";
  color: ${theme.colors.dimgray};
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: .02em;
`;
export const StyledP = styled.p`
  font-family: "Armin Grotesk Regular";
  color: ${theme.colors.dimgray};
  font-size: 1.25rem;
`;

export const StyledA = styled.a`
  font-family: "Armin Grotesk Semibold";
  color: ${theme.colors.mediumblue};
  font-size: 1rem;
  line-height: 140%;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
`;

const DivNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spacer_1};
`;

export const Main = styled.main`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export interface Window {
  window_width: number;
  window_height: number;
}

function getWindowDimensions(): Window {
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_width,
    window_height,
  };
}

export function useWindowDimensions(): Window {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function useScrollToElement(event: React.MouseEvent<HTMLButtonElement>, scrollRef: React.RefObject<HTMLDivElement>): void {
  event.preventDefault();
  scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
}

const App: React.FC = () => {
  return (
    <Router>
      <DivWrapper>
      <GlobalFonts />
        <DivContainer>
          <DivNavbar>
            <Navbar />
          </DivNavbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/library" element={<Library />} />
            <Route path="/support" element={<Support />} />
            <Route path="/mac-beta" element={<MacBeta />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </DivContainer>
        <Footer />
      </DivWrapper>
    </Router>
  );
}

export default App;
